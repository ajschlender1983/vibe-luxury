/* VIBE luxury elevation layer — motion. Defensive: never leaves content hidden. */
(function(){
  "use strict";
  var RM = false;
  try { RM = matchMedia('(prefers-reduced-motion: reduce)').matches; } catch(e){}

  function ready(fn){ if(document.readyState!=='loading') fn(); else document.addEventListener('DOMContentLoaded',fn); }

  ready(function(){
    try { enhance(); }
    catch(err){ /* if anything fails, guarantee everything is visible */
      document.querySelectorAll('.lx-reveal').forEach(function(el){ el.classList.add('in'); });
    }
  });

  function luminance(rgbStr){
    var m = (rgbStr||'').match(/\d+/g); if(!m) return 1;
    return (0.2126*m[0] + 0.7152*m[1] + 0.0722*m[2]) / 255;
  }

  function enhance(){
    /* ---------- 1. Ambient ripple into hero/CTA regions (plain backgrounds only) ---------- */
    if(!RM){
      var main = document.querySelector('main') || document.body;
      var candidates = [];
      var first = main.querySelector('.shopify-section');
      if(first) candidates.push(first);
      document.querySelectorAll('.shopify-section, section, [class*="cta"], [class*="banner"], [class*="hero"]').forEach(function(s){
        if(/cta|banner|hero|newsletter/i.test(s.className||'')) candidates.push(s);
      });
      var seen = new Set();
      candidates.slice(0,3).forEach(function(host){
        if(seen.has(host)) return; seen.add(host);
        var cs = getComputedStyle(host);
        if(cs.backgroundImage && cs.backgroundImage !== 'none') return;   // don't fight photography
        var r = host.getBoundingClientRect();
        if(r.height < 200) return;                                        // needs room to be gentle
        host.classList.add('lx-ripple-host');
        var rip = document.createElement('div');
        rip.className = 'lx-ripple' + (luminance(cs.backgroundColor) > 0.6 ? ' on-light' : '');
        rip.setAttribute('aria-hidden','true');
        for(var k=0;k<3;k++){ rip.appendChild(document.createElement('i')); }
        host.insertBefore(rip, host.firstChild);
      });
    }

    /* ---------- 2. Settle reveal-on-scroll (with hard fail-safe) ---------- */
    var blocks = [];
    document.querySelectorAll('main h1, main h2, [class*="__title"], [class*="__heading"], [class*="card"], .shopify-section > * > .page-width > *').forEach(function(el){
      if(el.closest('.lx-ripple')) return;
      if(el.offsetHeight>0 && el.offsetHeight < window.innerHeight*1.3) blocks.push(el);
    });
    blocks = blocks.slice(0, 120);

    if(RM || !('IntersectionObserver' in window)){
      blocks.forEach(function(el){ el.classList.add('lx-reveal','in'); });
      return;
    }
    var io = new IntersectionObserver(function(es){
      es.forEach(function(e){ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); } });
    }, {threshold:.12, rootMargin:'0px 0px -6% 0px'});
    blocks.forEach(function(el){ el.classList.add('lx-reveal'); io.observe(el); });

    /* reveal whatever's already on screen right away (avoids first-paint gap) */
    requestAnimationFrame(function(){
      blocks.forEach(function(el){ var r=el.getBoundingClientRect(); if(r.top < window.innerHeight*0.95) el.classList.add('in'); });
    });
    /* fail-safe: nothing may stay hidden */
    setTimeout(function(){ document.querySelectorAll('.lx-reveal:not(.in)').forEach(function(el){
      var r=el.getBoundingClientRect(); if(r.top < window.innerHeight) el.classList.add('in');
    }); }, 2500);
    window.addEventListener('load', function(){
      setTimeout(function(){ document.querySelectorAll('.lx-reveal:not(.in)').forEach(function(el){
        var r=el.getBoundingClientRect(); if(r.top < window.innerHeight*1.2) el.classList.add('in');
      }); }, 400);
    });
  }
})();
