'use strict';

/* ---------- Data (from home_decorating_shopping_list_v2.pdf) ---------- */

const PAINT = {
  denim:   { name: 'Denim Drift',         hex: '#7C8D95' },
  dawn:    { name: 'Tranquil Dawn',       hex: '#BFC6BC' },
  olive:   { name: 'Overtly Olive',       hex: '#B1AC96' },
  vanilla: { name: 'Vanilla Sundae',      hex: '#F6E4B5' },
  sage:    { name: 'Matte Sage Green',    hex: '#9DA98A' },
  white:   { name: 'Pure Brilliant White', hex: '#FBFBF9' }
};

const STORES = {
  sfw: {
    name: 'Screwfix Wells', address: 'Cathedral Ave, Wells BA5 1UA', local: true,
    // [open, close] in minutes, Sunday first
    hours: [[540, 960], [420, 1140], [420, 1140], [420, 1140], [420, 1140], [420, 1140], [420, 1080]]
  },
  bqg: {
    name: 'B&Q Glastonbury', address: 'Wirral Park Rd, Glastonbury BA6 9XE', local: true,
    hours: [[600, 960], [480, 1200], [480, 1200], [480, 1200], [480, 1200], [480, 1200], [480, 1200]]
  },
  cds: {
    name: 'City Decorating Supplies', address: 'Tucker St, Wells BA5 2DZ', local: true,
    hours: [null, [540, 1050], [540, 1050], [540, 1050], [540, 1050], [540, 1050], [570, 960]]
  },
  sfg: { name: 'Screwfix Glastonbury', address: 'Glastonbury', local: true },
  pj:  { name: 'Proper Job', address: 'Glastonbury', local: true },
  ws:  { name: 'Whiting & Son', address: 'High St, Wells', local: true },
  online: { name: 'Online', local: false }
};

const ONLINE = [
  { name: 'Dulux', url: 'https://www.dulux.co.uk', what: 'Testers and custom-mixed Vanilla Sundae' },
  { name: 'B&Q', url: 'https://www.diy.com', what: 'Paint, vinyl wrap, tools' },
  { name: 'Screwfix', url: 'https://www.screwfix.com', what: 'Check stock before you go' },
  { name: 'Create Your World', url: 'https://www.createyourworld.co.uk', what: 'd-c-fix samples and long lengths, application kits' },
  { name: 'First4Magnets', url: 'https://www.first4magnets.com', what: 'Self-adhesive ferrous sheet' },
  { name: 'Magnet Expert', url: 'https://www.magnetexpert.com', what: 'Self-adhesive ferrous sheet' },
  { name: 'Dunelm', url: 'https://www.dunelm.com', what: 'Olive or moss green curtains' },
  { name: 'Next', url: 'https://www.next.co.uk', what: 'Curtains' },
  { name: 'Marks & Spencer', url: 'https://www.marksandspencer.com', what: 'Curtains' },
  { name: 'Amazon UK', url: 'https://www.amazon.co.uk', what: 'Cabinet handles' }
];

const SHOP = [
  {
    title: 'Paint and samples',
    items: [
      { id: 'p-denim', paint: 'denim', name: 'Denim Drift', spec: 'Easycare Bathroom Soft Sheen, 2.5L',
        note: 'Bathroom walls. Covers about 32.5m², plenty for 2 coats.',
        buy: [
          { s: 'sfw', price: '£29.99', detail: 'Code 890CG, in stock' },
          { s: 'sfg', price: '£29.99' },
          { s: 'online', where: 'B&Q online', price: '£32.00' }
        ] },
      { id: 'p-dawn', paint: 'dawn', name: 'Tranquil Dawn', spec: 'Easycare Washable & Tough Matt, 2.5L or 5L',
        note: 'Three bedroom walls.',
        buy: [
          { s: 'sfw', price: '£31.99', detail: '2.5L, code 930HX' },
          { s: 'bqg', price: 'about £32.00', detail: '2.5L' }
        ] },
      { id: 'p-olive', paint: 'olive', name: 'Overtly Olive', spec: 'Easycare Washable & Tough / Kitchen Matt, 2.5L',
        note: 'Bedroom accent wall behind the pine headboard.',
        buy: [
          { s: 'sfw', price: '£29.99', detail: 'Code 57564, in stock' },
          { s: 'online', where: 'B&Q online or Bristol', price: '£32.00' }
        ] },
      { id: 'p-vanilla', paint: 'vanilla', name: 'Vanilla Sundae', spec: 'Easycare Washable & Tough Matt, 2.5L or 5L',
        note: 'Living, dining and kitchen walls. Low-VOC and scrubbable.',
        buy: [
          { s: 'sfw', price: '£31.99', detail: '2.5L, code 3895T, in stock' },
          { s: 'bqg', detail: 'Custom-mixed' },
          { s: 'online', where: 'Dulux.co.uk', detail: 'Custom-mixed' }
        ] },
      { id: 'p-white', paint: 'white', name: 'Pure Brilliant White Matt', spec: '2.5L to 5L',
        note: 'All ceilings.',
        buy: [ { s: 'sfw' }, { s: 'bqg' }, { s: 'cds' } ] },
      { id: 'p-satin', paint: 'white', name: 'Quick Dry Satinwood', spec: '750ml to 1L',
        note: 'Skirting boards. Low-odour and tough.',
        buy: [ { s: 'sfw' }, { s: 'bqg' }, { s: 'cds' } ] },
      { id: 'p-testers', testers: ['denim', 'dawn', 'olive', 'vanilla'], name: 'Tester pots, 30ml', spec: 'Denim Drift, Tranquil Dawn, Overtly Olive, Vanilla Sundae',
        note: 'Try them next to the grey tiles and under the kitchen bulbs first.',
        buy: [
          { s: 'bqg', price: 'about £2.70 each' },
          { s: 'online', where: 'Dulux.co.uk' }
        ] }
    ]
  },
  {
    title: 'Kitchen wrap, magnetic fridge and curtains',
    items: [
      { id: 'k-vinyl', paint: 'sage', name: 'd-c-fix Matte Sage Green vinyl wrap', spec: 'Self-adhesive, 67.5cm or 90cm wide',
        note: 'Get a width that wraps the fridge and dishwasher doors in one seamless sheet.',
        buy: [
          { s: 'bqg', price: '£10.50', detail: '67.5cm × 2m roll, in stock' },
          { s: 'online', where: 'CreateYourWorld.co.uk', price: '£5.97 to £55.97', detail: 'Samples, and continuous lengths up to 15m' }
        ] },
      { id: 'k-ferrous', name: 'Self-adhesive flexible ferrous sheet', spec: '0.5mm to 0.7mm thick',
        note: 'Goes on the non-magnetic fridge front, under the sage vinyl. Cut it 3 to 5mm smaller than the door.',
        buy: [
          { s: 'online', where: 'First4Magnets.com' },
          { s: 'online', where: 'MagnetExpert.com', detail: 'Search “self-adhesive ferrous sheet”' }
        ] },
      { id: 'k-handles', optional: true, name: 'Cabinet handles', spec: 'Warm brass or brushed nickel',
        note: 'Optional. Measure the existing screw-hole centres before ordering.',
        buy: [ { s: 'sfw' }, { s: 'bqg' }, { s: 'online', where: 'Amazon UK' } ] },
      { id: 'k-curtains', curtain: true, name: 'Olive or moss green curtains', spec: 'For both bedroom windows, blackout-lined if you can',
        note: 'To replace the burgundy curtains.',
        buy: [
          { s: 'online', where: 'Dunelm', detail: 'Online or nearest store' },
          { s: 'online', where: 'Next.co.uk' },
          { s: 'online', where: 'Marks & Spencer' }
        ] }
    ]
  },
  {
    title: 'Prep, painting and wrapping tools',
    items: [
      { id: 't-sugar', name: 'Sugar soap', note: 'Degreases the kitchen doors and fridge before wrapping.',
        buy: [ { s: 'cds' }, { s: 'sfw' }, { s: 'pj' } ] },
      { id: 't-sand', name: 'Sandpaper, 180 to 240 grit',
        buy: [ { s: 'cds' }, { s: 'sfw' }, { s: 'pj' } ] },
      { id: 't-caulk', name: 'Decorator’s caulk and filler',
        buy: [ { s: 'cds' }, { s: 'sfw' }, { s: 'pj' } ] },
      { id: 't-frog', name: 'FrogTape, 2 rolls', spec: 'Yellow Delicate or Green Multi-Surface',
        note: 'For crisp lines against the grey bathroom tiles and the accent wall.',
        buy: [ { s: 'sfw' }, { s: 'bqg' }, { s: 'ws' } ] },
      { id: 't-dust', name: 'Dust sheets',
        buy: [ { s: 'sfw' }, { s: 'bqg' }, { s: 'ws' } ] },
      { id: 't-roller', name: '9-inch medium-pile microfibre roller',
        buy: [ { s: 'cds' }, { s: 'sfw' } ] },
      { id: 't-mini', name: '4-inch mini roller',
        buy: [ { s: 'cds' }, { s: 'sfw' } ] },
      { id: 't-brush', name: 'Angled synthetic brushes',
        note: 'Synthetic bristles give the cleanest finish with water-based Dulux paint.',
        buy: [ { s: 'cds' }, { s: 'sfw' } ] },
      { id: 't-squeegee', name: 'Felt-edged vinyl squeegee', note: 'Smooths the vinyl wrap without bubbles.',
        buy: [ { s: 'bqg', detail: 'd-c-fix application kit' }, { s: 'online', where: 'CreateYourWorld.co.uk' } ] },
      { id: 't-knife', name: 'Snap-off craft knife', note: 'For trimming the vinyl at the edges.',
        buy: [ { s: 'bqg', detail: 'd-c-fix application kit' }, { s: 'online', where: 'CreateYourWorld.co.uk' } ] },
      { id: 't-dryer', name: 'Hairdryer', note: 'A household one is fine. Warms the vinyl so corners seal cleanly.',
        buy: [] }
    ]
  }
];

const STEPS = [
  { title: 'Bathroom', paints: ['denim'],
    body: 'Keep the door closed and run the extractor fan.',
    wait: 'Wait 24 hours before showering so the moisture barrier cures.' },
  { title: 'Bedroom', paints: ['dawn', 'olive'],
    body: 'Keep your rabbit safely in the living area while you paint.',
    wait: 'Ventilate the bedroom for 4 to 6 hours.' },
  { title: 'Living, dining and kitchen', paints: ['vanilla'],
    body: 'Move your rabbit into the freshly aired bedroom while you paint.',
    wait: 'Keep the windows open for 4 to 6 hours, until it’s touch-dry and odour-free, before bringing them back.' },
  { title: 'Kitchen cabinets and magnetic fridge', paints: ['sage'],
    body: 'Ferrous sheet and d-c-fix vinyl give off no paint fumes, so your rabbit can stay in the room while you work.',
    wait: null }
];

/* ---------- State ---------- */

const KEY = 'homedecor:v1';
const state = load();

function load() {
  const base = { bought: {}, steps: {}, store: 'all', hideBought: false, iosHintClosed: false };
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? Object.assign(base, JSON.parse(raw)) : base;
  } catch (e) { return base; }
}
function save() {
  try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (e) { /* storage unavailable */ }
}

/* ---------- Helpers ---------- */

const $ = (sel, root = document) => root.querySelector(sel);
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const allItems = () => SHOP.flatMap((g) => g.items);

function isLight(hex) {
  const n = parseInt(hex.slice(1), 16);
  const r = (n >> 16) & 255, g = (n >> 8) & 255, b = n & 255;
  return (0.299 * r + 0.587 * g + 0.114 * b) > 150;
}

function fmtTime(mins) {
  const h = Math.floor(mins / 60), m = mins % 60;
  const h12 = ((h + 11) % 12) + 1;
  return h12 + (m ? ':' + String(m).padStart(2, '0') : '') + (h < 12 ? 'am' : 'pm');
}

const DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

function openStatus(hours, now = new Date()) {
  const day = now.getDay();
  const mins = now.getHours() * 60 + now.getMinutes();
  const today = hours[day];
  if (today && mins >= today[0] && mins < today[1]) {
    return { open: true, text: 'Open until ' + fmtTime(today[1]) };
  }
  if (today && mins < today[0]) return { open: false, text: 'Closed, opens ' + fmtTime(today[0]) };
  for (let i = 1; i <= 7; i++) {
    const d = (day + i) % 7;
    if (hours[d]) {
      return { open: false, text: 'Closed, opens ' + (i === 1 ? 'tomorrow' : DAYS[d]) + ' ' + fmtTime(hours[d][0]) };
    }
  }
  return { open: false, text: 'Closed' };
}

function hoursRows(hours) {
  // Group consecutive days (Mon..Sun) with identical hours
  const order = [1, 2, 3, 4, 5, 6, 0];
  const short = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const rows = [];
  const today = new Date().getDay();
  order.forEach((d) => {
    const h = hours[d];
    const label = h ? fmtTime(h[0]) + ' to ' + fmtTime(h[1]) : 'Closed';
    const last = rows[rows.length - 1];
    if (last && last.label === label) { last.days.push(d); } else { rows.push({ days: [d], label }); }
  });
  return rows.map((r) => {
    const name = r.days.length > 1 ? short[r.days[0]] + ' to ' + short[r.days[r.days.length - 1]] : short[r.days[0]];
    const isToday = r.days.includes(today);
    return `<tr${isToday ? ' class="today"' : ''}><th scope="row">${name}</th><td>${r.label}</td></tr>`;
  }).join('');
}

function mapsUrl(store) {
  return 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(store.name + ' ' + store.address);
}

/* ---------- Rooms ---------- */

function renderRooms() {
  const chip = (k, role) => `
    <li><span class="dot" style="--c:${PAINT[k].hex}"></span>
      <span><strong>${PAINT[k].name}</strong><br><span class="muted">${role}</span></span></li>`;

  $('#view-rooms').innerHTML = `
    <h2 class="sr-only">Rooms</h2>

    <article class="room">
      <div class="scene bathroom" role="img" aria-label="Bathroom: Denim Drift walls, white ceiling, grey tiles, wood shelf">
        <span class="ceiling"></span><span class="shelf"></span><span class="tiles"></span>
      </div>
      <h3>Bathroom</h3>
      <p class="muted">Windowless, with grey tiles</p>
      <ul class="paints">${chip('denim', 'Walls')}</ul>
      <dl>
        <dt>Finish</dt><dd>Easycare Bathroom Soft Sheen. Moisture and mould resistant.</dd>
        <dt>Pair with</dt><dd>White ceiling and a wood shelf.</dd>
      </dl>
    </article>

    <article class="room">
      <div class="scene bedroom" role="img" aria-label="Bedroom: Tranquil Dawn walls, Overtly Olive headboard wall, olive curtains, pine bed">
        <span class="ceiling"></span>
        <span class="window w1"><i></i><i></i></span><span class="window w2"><i></i><i></i></span>
        <span class="accent"></span><span class="bed"></span>
      </div>
      <h3>Bedroom</h3>
      <p class="muted">Two windows and a plain pine bed</p>
      <ul class="paints">${chip('dawn', 'Three walls')}${chip('olive', 'Headboard wall')}</ul>
      <dl>
        <dt>Finish</dt><dd>Easycare Washable & Tough Matt.</dd>
        <dt>Pair with</dt><dd>Olive or moss green curtains and a white ceiling.</dd>
      </dl>
    </article>

    <article class="room">
      <div class="scene living" role="img" aria-label="Living, dining and kitchen: Vanilla Sundae walls, sage green cabinets and fridge">
        <span class="ceiling"></span><span class="fridge"></span><span class="units"></span><span class="worktop"></span>
      </div>
      <h3>Living, dining and kitchen</h3>
      <p class="muted">Open plan, with a windowless kitchen</p>
      <ul class="paints">${chip('vanilla', 'Walls')}${chip('sage', 'Cabinets, fridge and dishwasher')}</ul>
      <dl>
        <dt>Finish</dt><dd>Easycare Washable & Tough Matt on the walls. Self-adhesive matte vinyl wrap on the flat doors, fridge and dishwasher.</dd>
      </dl>
    </article>

    <article class="room whole">
      <h3>Throughout</h3>
      <ul class="paints">${chip('white', 'Matt on every ceiling, Quick Dry Satinwood on skirting')}</ul>
    </article>

    <p class="footnote">Colours on screen are approximate. Use tester pots to check them in your own light.</p>
  `;
}

/* ---------- Shopping ---------- */

function storeFilters() {
  const used = new Set();
  allItems().forEach((it) => it.buy.forEach((b) => used.add(b.s)));
  const ids = ['sfw', 'bqg', 'cds', 'sfg', 'pj', 'ws', 'online'].filter((s) => used.has(s));
  return [{ id: 'all', name: 'Everywhere' }].concat(ids.map((id) => ({ id, name: STORES[id].name })));
}

function swatchFor(it) {
  if (it.paint) return PAINT[it.paint].hex;
  if (it.curtain) return '#6F7350';
  return null;
}

function renderShopping() {
  const filter = state.store;
  const view = $('#view-shopping');

  const chips = storeFilters().map((f) =>
    `<button type="button" class="chip" data-store="${f.id}" aria-pressed="${f.id === filter}">${esc(f.name)}</button>`
  ).join('');

  let shown = 0;
  const groups = SHOP.map((g) => {
    const items = g.items.filter((it) => filter === 'all' || it.buy.some((b) => b.s === filter));
    if (!items.length) return '';
    const done = items.filter((it) => state.bought[it.id]).length;
    const rows = items.map((it) => {
      const bought = !!state.bought[it.id];
      if (bought && state.hideBought) return '';
      shown++;
      const sw = swatchFor(it);
      const boxStyle = sw ? `--fill:${sw};--tick:${isLight(sw) ? '#28322B' : '#FFFFFF'}` : '';
      const mark = it.testers
        ? `<span class="testers" aria-hidden="true">${it.testers.map((k) => `<i style="--c:${PAINT[k].hex}"></i>`).join('')}</span>`
        : (sw ? `<span class="dot sm" style="--c:${sw}" aria-hidden="true"></span>` : '');
      const buy = it.buy.length ? `<ul class="buy">${it.buy.map((b) => {
        const where = b.where || STORES[b.s].name;
        const hit = filter !== 'all' && b.s === filter;
        return `<li${hit ? ' class="hit"' : ''}><span class="where">${esc(where)}</span>` +
          (b.price ? `<span class="price">${esc(b.price)}</span>` : '') +
          (b.detail ? `<span class="detail">${esc(b.detail)}</span>` : '') + '</li>';
      }).join('')}</ul>` : '';
      return `
        <li class="item${bought ? ' bought' : ''}">
          <label>
            <input type="checkbox" data-id="${it.id}"${bought ? ' checked' : ''}>
            <span class="box" style="${boxStyle}" aria-hidden="true"></span>
            <span class="body">
              <span class="name">${mark}${esc(it.name)}</span>
              ${it.spec ? `<span class="spec">${esc(it.spec)}</span>` : ''}
              ${it.note ? `<span class="note">${esc(it.note)}</span>` : ''}
            </span>
          </label>
          ${buy}
        </li>`;
    }).join('');
    return `
      <section class="group">
        <h3>${esc(g.title)} <span class="count">${done} of ${items.length}</span></h3>
        <ul class="items">${rows || '<li class="empty">Everything here is bought.</li>'}</ul>
      </section>`;
  }).join('');

  view.innerHTML = `
    <h2 class="sr-only">Shopping list</h2>
    <div class="filters">
      <p class="filters-label" id="store-label">Where are you shopping?</p>
      <div class="chips" role="group" aria-labelledby="store-label">${chips}</div>
      <label class="toggle"><input type="checkbox" id="hide-bought"${state.hideBought ? ' checked' : ''}> Hide bought items</label>
    </div>
    ${groups}
    ${shown === 0 && state.hideBought ? '<p class="empty big">Nothing left to buy here.</p>' : ''}
    <div class="reset">
      <button type="button" id="untick">Untick everything</button>
    </div>
  `;
}

/* ---------- Order ---------- */

function renderOrder() {
  const steps = STEPS.map((s, i) => {
    const done = !!state.steps[i];
    const bar = s.paints.map((k) => `<i style="--c:${PAINT[k].hex}"></i>`).join('');
    return `
      <li class="step${done ? ' done' : ''}">
        <span class="num" aria-hidden="true">${i + 1}</span>
        <div>
          <span class="bar" aria-hidden="true">${bar}</span>
          <h3>${esc(s.title)}</h3>
          <p class="muted">${s.paints.map((k) => PAINT[k].name).join(' and ')}</p>
          <p>${esc(s.body)}</p>
          ${s.wait ? `<p class="wait">${esc(s.wait)}</p>` : ''}
          <label class="done-toggle"><input type="checkbox" data-step="${i}"${done ? ' checked' : ''}> Done</label>
        </div>
      </li>`;
  }).join('');

  $('#view-order').innerHTML = `
    <h2>Rabbit-safe order</h2>
    <p class="lede">Paint the rooms in this order so your rabbit always has a fume-free room to be in.</p>
    <ol class="steps">${steps}</ol>
  `;
}

/* ---------- Stores ---------- */

function renderStores() {
  const counts = {};
  allItems().forEach((it) => {
    if (state.bought[it.id]) return;
    new Set(it.buy.map((b) => b.s)).forEach((s) => { counts[s] = (counts[s] || 0) + 1; });
  });

  const main = ['sfw', 'cds', 'bqg'].map((id) => {
    const st = STORES[id];
    const status = openStatus(st.hours);
    const n = counts[id] || 0;
    return `
      <article class="store">
        <h3>${esc(st.name)}</h3>
        <p class="muted">${esc(st.address)}</p>
        <p class="status ${status.open ? 'open' : 'closed'}">${status.text}</p>
        <table class="hours">${hoursRows(st.hours)}</table>
        <div class="actions">
          <a class="btn" href="${mapsUrl(st)}" target="_blank" rel="noopener">Directions</a>
          <button type="button" class="btn secondary" data-goto-store="${id}">${n ? `See ${n} item${n === 1 ? '' : 's'} to buy here` : 'Nothing left to buy here'}</button>
        </div>
      </article>`;
  }).join('');

  const others = ['sfg', 'pj', 'ws'].map((id) => {
    const st = STORES[id];
    return `<li><span><strong>${esc(st.name)}</strong><br><span class="muted">${esc(st.address)}</span></span>
      <a href="${mapsUrl(st)}" target="_blank" rel="noopener">Directions</a></li>`;
  }).join('');

  const online = ONLINE.map((o) =>
    `<li><a href="${o.url}" target="_blank" rel="noopener">${esc(o.name)}</a><span class="muted">${esc(o.what)}</span></li>`
  ).join('');

  $('#view-stores').innerHTML = `
    <h2>Local stores</h2>
    ${main}
    <h2>Also nearby</h2>
    <ul class="plain-list">${others}</ul>
    <h2>Online</h2>
    <ul class="online">${online}</ul>
    <p class="footnote">Prices and opening hours are from your list. Check before you travel, especially on bank holidays.</p>
  `;
}

/* ---------- Progress, routing, events ---------- */

function renderProgress() {
  const items = allItems();
  const done = items.filter((it) => state.bought[it.id]).length;
  $('#progress-text').textContent = `${done} of ${items.length} bought`;
  $('#progress-fill').style.width = (items.length ? (done / items.length) * 100 : 0) + '%';
}

const VIEWS = ['rooms', 'shopping', 'order', 'stores'];
const RENDER = { rooms: renderRooms, shopping: renderShopping, order: renderOrder, stores: renderStores };

function route() {
  const name = VIEWS.includes(location.hash.slice(1)) ? location.hash.slice(1) : 'rooms';
  VIEWS.forEach((v) => {
    $('#view-' + v).hidden = v !== name;
    const tab = $('#tab-' + v);
    if (v === name) tab.setAttribute('aria-current', 'page'); else tab.removeAttribute('aria-current');
  });
  RENDER[name]();
  renderProgress();
}

document.addEventListener('change', (e) => {
  const t = e.target;
  if (t.matches('input[data-id]')) {
    if (t.checked) state.bought[t.dataset.id] = true; else delete state.bought[t.dataset.id];
    save();
    const li = t.closest('.item');
    if (state.hideBought && t.checked) {
      setTimeout(renderShopping, 250);
    } else {
      li.classList.toggle('bought', t.checked);
      // Every item in the group is on screen here, so the ticked boxes are the count
      const group = t.closest('.group');
      const boxes = [...group.querySelectorAll('input[data-id]')];
      group.querySelector('.count').textContent =
        `${boxes.filter((b) => b.checked).length} of ${boxes.length}`;
    }
    renderProgress();
  } else if (t.matches('input[data-step]')) {
    if (t.checked) state.steps[t.dataset.step] = true; else delete state.steps[t.dataset.step];
    save();
    t.closest('.step').classList.toggle('done', t.checked);
  } else if (t.id === 'hide-bought') {
    state.hideBought = t.checked;
    save();
    renderShopping();
  }
});

let untickArmed = null;
document.addEventListener('click', (e) => {
  const chip = e.target.closest('[data-store]');
  if (chip) {
    state.store = chip.dataset.store;
    save();
    renderShopping();
    return;
  }
  const go = e.target.closest('[data-goto-store]');
  if (go) {
    state.store = go.dataset.gotoStore;
    state.hideBought = true;
    save();
    location.hash = '#shopping';
    window.scrollTo(0, 0);
    return;
  }
  if (e.target.id === 'untick') {
    const btn = e.target;
    if (!untickArmed) {
      btn.textContent = 'Tap again to untick everything';
      btn.classList.add('armed');
      untickArmed = setTimeout(() => {
        untickArmed = null;
        btn.textContent = 'Untick everything';
        btn.classList.remove('armed');
      }, 3000);
    } else {
      clearTimeout(untickArmed);
      untickArmed = null;
      state.bought = {};
      save();
      renderShopping();
      renderProgress();
    }
  }
});

window.addEventListener('hashchange', () => { route(); window.scrollTo(0, 0); });

/* ---------- Install ---------- */

let deferredPrompt = null;
window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
  $('#install').hidden = false;
});
$('#install').addEventListener('click', async () => {
  if (!deferredPrompt) return;
  deferredPrompt.prompt();
  await deferredPrompt.userChoice;
  deferredPrompt = null;
  $('#install').hidden = true;
});
window.addEventListener('appinstalled', () => { $('#install').hidden = true; });

const standalone = window.matchMedia('(display-mode: standalone)').matches || navigator.standalone === true;
const isIOS = /iphone|ipad|ipod/i.test(navigator.userAgent) ||
  (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
if (isIOS && !standalone && !state.iosHintClosed) $('#ios-hint').hidden = false;
$('#ios-hint-close').addEventListener('click', () => {
  state.iosHintClosed = true;
  save();
  $('#ios-hint').hidden = true;
});

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => { navigator.serviceWorker.register('sw.js').catch(() => {}); });
}

route();
