// Shared "auto CMS" engine used by BOTH the public site and the admin visual editor.
// It walks a subtree, wraps every visible text node in a <span class="cms-text">, and indexes
// every <img>. Because the public page and the admin editor render the SAME homepage HTML, the
// walk is deterministic and produces the SAME keys on both sides — so overrides map correctly
// without any manual data-* tagging.

const SKIP = new Set(['svg', 'script', 'style', 'select', 'textarea', 'input', 'noscript']);

export function collectEditable(root) {
  const items = [];
  let ti = 0;
  let ii = 0;

  function walk(node) {
    const children = Array.from(node.childNodes);
    for (const child of children) {
      if (child.nodeType === 3) {
        // text node
        if (child.textContent && child.textContent.trim()) {
          const span = document.createElement('span');
          span.className = 'cms-text';
          span.textContent = child.textContent;
          const key = 't' + ti++;
          span.setAttribute('data-cms-key', key);
          node.replaceChild(span, child);
          items.push({ type: 'text', el: span, key });
        }
      } else if (child.nodeType === 1) {
        const tag = child.tagName.toLowerCase();
        if (tag === 'img') {
          const key = 'i' + ii++;
          child.setAttribute('data-cms-key', key);
          items.push({ type: 'img', el: child, key });
          continue;
        }
        if (SKIP.has(tag)) continue;
        if (child.hasAttribute && child.hasAttribute('data-cms-skip')) continue; // managed structurally (sidebar)
        if (child.classList && child.classList.contains('cms-text')) continue; // already processed
        walk(child);
      }
    }
  }

  walk(root);
  return items;
}

export function applyOverrides(items, overrides) {
  if (!overrides) return;
  const map = new Map(items.map((it) => [it.key, it]));
  for (const key of Object.keys(overrides)) {
    const it = map.get(key);
    if (!it) continue;
    if (it.type === 'text') it.el.textContent = overrides[key];
    else if (it.type === 'img') it.el.setAttribute('src', overrides[key]);
  }
}
