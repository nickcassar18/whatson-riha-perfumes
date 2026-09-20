/* RIĦA Perfumes — GitHub Pages support
   Countdown for the 18 November 2026 influencer launch, 7:30pm Malta time.
*/
(function () {
  var target = Date.UTC(2026, 10, 18, 18, 30, 0);
  var els = {
    d: document.getElementById('cd-days'),
    h: document.getElementById('cd-hours'),
    m: document.getElementById('cd-mins'),
    s: document.getElementById('cd-secs')
  };

  if (!els.d || !els.h || !els.m || !els.s) return;

  function pad(n) { return String(n).padStart(2, '0'); }

  function tick() {
    var diff = Math.max(0, target - Date.now());
    var d = Math.floor(diff / 86400000); diff -= d * 86400000;
    var h = Math.floor(diff / 3600000);  diff -= h * 3600000;
    var m = Math.floor(diff / 60000);    diff -= m * 60000;
    var s = Math.floor(diff / 1000);

    els.d.textContent = pad(d);
    els.h.textContent = pad(h);
    els.m.textContent = pad(m);
    els.s.textContent = pad(s);
  }

  tick();
  window.setInterval(tick, 1000);
})();
