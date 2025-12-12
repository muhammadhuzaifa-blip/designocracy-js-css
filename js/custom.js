const safe = { exists: e => null != e, isFunction: e => "function" == typeof e, hasLib: e => void 0 !== window[e], q: (e, t = document) => t.querySelector(e), qAll: (e, t = document) => Array.from(t.querySelectorAll(e || "")), hasEl: (e, t = document) => !!t.querySelector(e) }; function checkMobile() { try { 767 >= $(window).width() ? ($("body").addClass("hz_mobile_version").removeClass("hz_desktop_version"), $(".hz-desktop-sec").length && $(".hz-desktop-sec").remove()) : ($("body").addClass("hz_desktop_version").removeClass("hz_mobile_version"), $(".hz-mobile-sec").length && $(".hz-mobile-sec").remove()) } catch (e) { console.warn("checkMobile error:", e) } } function initOwlCarousels() { try { safe.hasLib("jQuery") && safe.isFunction(jQuery().owlCarousel) ? jQuery("#partners_slider").owlCarousel({ autoplay: !0, rewind: !1, margin: 10, loop: !0, responsiveClass: !0, autoHeight: !1, autoplayTimeout: 3e3, smartSpeed: 800, nav: !1, touchDrag: !0, mouseDrag: !0, responsive: { 0: { items: 1, stagePadding: 20, autoHeight: !1 }, 576: { items: 2, stagePadding: 30 }, 768: { items: 3 }, 992: { items: 4 }, 1200: { items: 4 }, 1440: { items: 5 } } }) : console.warn("owlCarousel not available for #partners_slider") } catch (e) { console.warn("partners_slider init error:", e) } try { safe.hasLib("jQuery") && safe.isFunction(jQuery().owlCarousel) ? jQuery("#success_stories_slider").owlCarousel({ autoplay: !0, rewind: !1, margin: 10, loop: !0, responsiveClass: !0, autoHeight: !0, autoplayTimeout: 3e3, smartSpeed: 800, nav: !1, touchDrag: !0, mouseDrag: !0, responsive: { 0: { items: 1, stagePadding: 20, margin: 0 }, 576: { items: 1, stagePadding: 10, margin: 0 }, 768: { items: 2 }, 992: { items: 2 }, 1200: { items: 2 }, 1400: { items: 3 } } }) : console.warn("owlCarousel not available for #success_stories_slider") } catch (t) { console.warn("success_stories_slider init error:", t) } try { safe.hasLib("jQuery") && safe.isFunction(jQuery().owlCarousel) ? jQuery(".industries_slider").owlCarousel({ autoplay: !0, rewind: !1, margin: 10, loop: !0, responsiveClass: !0, autoHeight: !0, autoplayTimeout: 3e3, smartSpeed: 800, nav: !1, autoWidth: !0, touchDrag: !0, mouseDrag: !0, responsive: { 0: { items: 2, stagePadding: 20, margin: 0 }, 576: { items: 2 }, 768: { items: 5 }, 992: { items: 6 }, 1200: { items: 7 }, 1400: { items: 7 } } }) : console.warn("owlCarousel not available for .industries_slider") } catch (r) { console.warn("industries_slider init error:", r) } var s = null; try { safe.hasLib("jQuery") && safe.isFunction(jQuery().owlCarousel) ? s = jQuery("#lp1_slider").owlCarousel({ autoplay: !0, rewind: !1, margin: 0, loop: !0, responsiveClass: !0, autoHeight: !0, autoplayTimeout: 3e3, smartSpeed: 800, nav: !1, autoWidth: !1, touchDrag: !0, mouseDrag: !0, responsive: { 0: { items: 1 }, 576: { items: 1 }, 768: { items: 1 }, 992: { items: 1 }, 1200: { items: 1 }, 1400: { items: 1 } } }) : console.warn("owlCarousel not available for #lp1_slider") } catch (i) { console.warn("lp1_slider init error:", i) } try { safe.hasLib("jQuery") && safe.isFunction(jQuery().owlCarousel) ? jQuery("#clutch_reviews_slider").owlCarousel({ autoplay: !0, rewind: !1, margin: 20, loop: !0, responsiveClass: !0, autoHeight: !0, autoplayTimeout: 3e3, smartSpeed: 800, nav: !1, autoWidth: !1, touchDrag: !0, mouseDrag: !0, responsive: { 0: { items: 1 }, 576: { items: 1 }, 768: { items: 2 }, 992: { items: 3 }, 1200: { items: 3 }, 1400: { items: 3 } } }) : console.warn("owlCarousel not available for #clutch_reviews_slider") } catch (o) { console.warn("clutch_reviews_slider init error:", o) } try { safe.hasLib("jQuery") && safe.isFunction(jQuery().owlCarousel) ? jQuery("#process_slider").owlCarousel({ autoplay: !0, rewind: !1, margin: 20, loop: !0, responsiveClass: !0, autoHeight: !0, autoplayTimeout: 3e3, smartSpeed: 800, nav: !1, autoWidth: !1, touchDrag: !0, mouseDrag: !0, responsive: { 0: { items: 1 }, 576: { items: 1 }, 768: { items: 1 }, 992: { items: 1 }, 1200: { items: 2 }, 1441: { items: 2 }, 1442: { items: 3 } } }) : console.warn("owlCarousel not available for #process_slider") } catch (a) { console.warn("process_slider init error:", a) } try { jQuery("#lp1 .hz-slider-btn-prev").click(function () { try { s && s.trigger && s.trigger("prev.owl.carousel") } catch (e) { } }), jQuery("#lp1 .hz-slider-btn-next").click(function () { try { s && s.trigger && s.trigger("next.owl.carousel") } catch (e) { } }) } catch (n) { console.warn("lp1 nav attach error:", n) } } function initSlickSliders() { try { safe.hasLib("jQuery") && safe.isFunction(jQuery().slick) ? $(".sec2_logo_slider").slick({ slidesToShow: 10, slidesToScroll: 1, autoplay: !0, arrows: !1, dots: !1, autoplaySpeed: 0, speed: 1e3, pauseOnHover: !1, cssEase: "linear", responsive: [{ breakpoint: 1400, settings: { slidesToShow: 7 } }, { breakpoint: 992, settings: { slidesToShow: 3 } },] }) : console.warn("slick not available for .sec2_logo_slider") } catch (e) { console.warn("sec2_logo_slider init error:", e) } try { safe.hasLib("jQuery") && safe.isFunction(jQuery().slick) ? $(".sec4_tags_slider").slick({ slidesToShow: 10, slidesToScroll: 1, autoplay: !0, arrows: !1, dots: !1, autoplaySpeed: 0, speed: 8e3, pauseOnHover: !1, cssEase: "linear", variableWidth: !0 }) : console.warn("slick not available for .sec4_tags_slider") } catch (t) { console.warn("sec4_tags_slider init error:", t) } } "scrollRestoration" in history && (history.scrollRestoration = "manual"), window.addEventListener("load", function () { try { let e = document.querySelector(".custom-cursor"); e && setTimeout(() => { e.classList.remove("hz-loader") }, 1e3) } catch (t) { console.warn("loader removal error:", t) } }), $(window).scroll(function () { try { $(this).scrollTop() > $(window).height() ? $(".homepage #hz_header").addClass("newClass") : $(".homepage #hz_header").removeClass("newClass") } catch (e) { console.warn("scroll handler1 error:", e) } }), $(window).scroll(function () { try { $(this).scrollTop() > 100 ? $("#hz_header:not(.homepage #hz_header)").addClass("newClass") : $("#hz_header:not(.homepage #hz_header)").removeClass("newClass") } catch (e) { console.warn("scroll handler2 error:", e) } }), $(window).on("beforeunload", function () { try { $(window).scrollTop(0) } catch (e) { } }), $(document).ready(function () { try { checkMobile(), initOwlCarousels(), initSlickSliders(), $(window).resize(function () { checkMobile() }), $("#partners_slider, #success_stories_slider, #industries_slider").on("mousedown", function () { $(this).find(".partner_slide, .success_stories_slide, .industries_slide").css("transform", "scale(0.95)") }).on("mouseup mouseleave", function () { $(this).find(".partner_slide, .success_stories_slide, .industries_slide").css("transform", "scale(1)") }), $(".mobile-menu-main-wrap .hz-hamburger label svg").click(function () { $(".hz-full-screen-menu").toggleClass("hz_closed hz_opened") }), $(".hz_mobile_menu .hz_header_menu .hz_menu_item").click(function () { $(".hz-full-screen-menu").removeClass("hz_opened").addClass("hz_closed"), $('.hamburger input[type="checkbox"]').prop("checked", !1) }), $(".hz_pop_btn").on("click", function () { let e = $(this).attr("pop_id"), t = $("#" + e); t.addClass("active"); let r = t.find("video").get(0); if (r) { try { r.currentTime = 0 } catch (s) { } r.play() } }), $(".hz_close_btn").on("click", function () { let e = $(this).closest(".hz_pop"); e.removeClass("active"); let t = e.find("video").get(0); if (t) try { t.pause() } catch (r) { } }), $(".hz_pop").on("click", function (e) { if ($(e.target).is(".hz_pop")) { $(this).removeClass("active"); let t = $(this).find("video").get(0); if (t) try { t.pause() } catch (r) { } } }) } catch (e) { console.warn("document ready error:", e) } }), window.onload = () => { setTimeout(() => { try { window.scrollTo(0, 0); let e = $("body").hasClass("hz_mobile_version"), t = navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4; if (!e) { if (safe.hasLib("Lenis")) try { let r = new Lenis({ lerp: t ? .15 : .03, smoothWheel: !0, smoothTouch: !0, infinite: !1 }); if (setTimeout(() => { safe.exists(r) && safe.isFunction(r.scrollTo) && r.scrollTo(0, { immediate: !0 }) }, 50), safe.hasLib("ScrollTrigger")) try { if (safe.hasLib("gsap") && safe.isFunction(gsap.registerPlugin)) try { gsap.registerPlugin(ScrollTrigger) } catch (s) { } safe.hasLib("ScrollTrigger") && safe.isFunction(ScrollTrigger.update) && r.on("scroll", ScrollTrigger.update) } catch (i) { console.warn("lenis <-> ScrollTrigger connect error:", i) } if (safe.hasLib("gsap") && gsap && gsap.ticker && safe.isFunction(gsap.ticker.add)) try { gsap.ticker.add(e => { try { r.raf(1e3 * e) } catch (t) { } }) } catch (o) { console.warn("gsap.ticker.add error:", o) } } catch (a) { console.warn("Lenis init error:", a) } if (document.querySelectorAll('a[href^="#"]').forEach(e => { e.addEventListener("click", function (e) { try { let t = this.getAttribute("href"), r = document.querySelector(t); if (r && safe.hasLib("Lenis")) { e.preventDefault(); try { if (window.lenis && safe.isFunction(window.lenis.scrollTo)) window.lenis.scrollTo(r, { offset: 0, duration: 1.5, easing: e => 1 - Math.pow(1 - e, 3) }); else if (safe.hasLib("Lenis")) { let s = new Lenis; s && safe.isFunction(s.scrollTo) && s.scrollTo(r, { offset: 0, duration: 1.5 }) } } catch (i) { } } else r && (e.preventDefault(), r.scrollIntoView({ behavior: "smooth", block: "start" })) } catch (o) { console.warn("anchor click handler error:", o) } }) }), safe.hasLib("gsap")) { try { gsap.ticker && safe.isFunction(gsap.ticker.fps) && gsap.ticker.fps(60) } catch (n) { } try { gsap.ticker && safe.isFunction(gsap.ticker.lagSmoothing) && gsap.ticker.lagSmoothing(0) } catch (l) { } } if (safe.hasLib("ScrollTrigger")) try { safe.isFunction(ScrollTrigger.normalizeScroll) && ScrollTrigger.normalizeScroll(!0) } catch (c) { } } if (safe.hasLib("gsap") && safe.hasLib("ScrollTrigger") && safe.isFunction(gsap.registerPlugin)) try { gsap.registerPlugin(ScrollTrigger) } catch (d) { console.warn("gsap.registerPlugin error:", d) } if (e) try { let h = document.querySelector(".hz_mobile_version .hz-hero-title > svg"), u = window.innerWidth < 410, p = gsap.timeline({ scrollTrigger: { trigger: ".hz_mobile_version #hero", start: "top top", end: "+=100%", scrub: 5, pin: !0 } }), m = window.innerWidth < 410 ? "-38vw" : u ? "-39.5vw" : -145; h ? p.to(h, { width: u ? 120 : 152, x: m, top: u ? 21 : 39, ease: "power2.inOut", duration: 3 }) : p.to(".hz_mobile_version .hz-hero-title > svg", { width: u ? 120 : 152, x: m, top: u ? 21 : 39, ease: "power2.inOut", duration: 3 }), p.to(".hz_mobile_version .hz-hero-content", { y: "-100vh", ease: "power2.inOut", duration: 4, delay: 1 }, "<"), p.to(".hz_mobile_version .hz_port_slides", { scale: 1, top: "55%", duration: 3, ease: "power2.out", delay: 1 }, "<"), p.to(".hz_mobile_version .header_logo_text > svg", { opacity: 1, duration: 1, ease: "power2.out", delay: 1 }), p.to(".hz_mobile_version .hz-hero-title > svg", { opacity: 0, duration: .1, ease: "power2.out", delay: .5 }, "<"), p.to(".hz_mobile_version .hz_port_slides .hz_port_slide.hz_port_slide2", { opacity: 1, y: "-95%", duration: 3, ease: "power2.out" }), p.to(".hz_mobile_version .hz_port_slides .hz_port_slide.hz_port_slide3", { opacity: 1, y: "-90%", duration: 3, ease: "power2.out" }); let g = gsap.timeline({ scrollTrigger: { trigger: ".hz_mobile_version #sec5", start: "top 40%", end: "+=80%", scrub: 0 } }); for (let v = 1; v <= 6; v++)g.to(`.hz_mobile_version .impact_card.impact_card${v}`, { x: "0%", y: "0%", rotate: "0deg", delay: v > 1 ? .3 : 0 }, "<"); gsap.timeline({ scrollTrigger: { trigger: ".hz_mobile_version #sec9", start: "top top", end: "bottom top", scrub: 3, pin: !0 } }).to(".hz_mobile_version #testis_wrap>.hz_testi_row", { x: "-685%", ease: "none" }); let y = gsap.timeline({ scrollTrigger: { trigger: ".hz_mobile_version #web_app_4", start: "top 60%", end: "bottom 20%", scrub: 0, pin: !1 } }); y.to(".hz_mobile_version .idea_card.idea_card1", { y: "-30%", x: "0%", ease: "power2.inOut" }), y.to(".hz_mobile_version .idea_card.idea_card3", { y: "-30%", x: "0%", ease: "power2.inOut" }, "<"), y.to(".hz_mobile_version .idea_card.idea_card2", { y: "-30%", x: "0%", ease: "power2.inOut" }, "<"); let f = gsap.timeline({ scrollTrigger: { trigger: "#industry_inner4", start: "top 60%", end: "bottom 20%", scrub: 0, pin: !1 } }); f.to("#industry_inner_box4", { y: "-30%", x: "0%", ease: "power2.inOut" }) } catch (_) { console.warn("mobile animation error:", _) } else try { let w = document.querySelector(".hz_desktop_version .hz-hero-title > svg"), b = gsap.timeline({ scrollTrigger: { trigger: ".hz_desktop_version #hero_wraps", start: "top top", end: "+=120%", scrub: 3, pin: !0, anticipatePin: 1 } }), z; z = window.innerWidth <= 768 || window.innerWidth <= 991 ? "-43.2vw" : window.innerWidth <= 1199 ? "-44.7vw" : window.innerWidth <= 1400 ? "-45.65vw" : window.innerWidth <= 1720 ? "-46.3vw" : "-808px", w ? b.to(w, { width: 152, x: z, top: 40, ease: "power2.inOut", duration: 3 }) : b.to(".hz_desktop_version .hz-hero-title > svg", { width: 152, x: z, top: 40, ease: "power2.inOut", duration: 3 }), b.to(".hz_desktop_version .hz-hero-content", { y: "-100vh", ease: "power2.inOut", duration: 3, delay: .5 }, "<"), b.to(".hz_desktop_version #hero .hz-row.hz-row2", { opacity: 0, ease: "power2.inOut", duration: 1 }, "<"), b.to(".hz_desktop_version .hz_port_slides", { scale: 1, top: "53%", duration: 3, ease: "power2.out", delay: 1 }, "<"), b.to(".hz_desktop_version .header_logo_text > svg", { opacity: 1, duration: 1, ease: "power2.out", delay: 1 }), b.to(".hz_desktop_version .hz-hero-title > svg", { opacity: 0, duration: .1, ease: "power2.out", delay: .5 }, "<"), b.to(".hz_desktop_version .hz_port_slides .hz_port_slide.hz_port_slide2", { opacity: 1, y: "-95%", duration: 3, ease: "power2.out", delay: .5 }), b.to(".hz_desktop_version .hz_port_slides .hz_port_slide.hz_port_slide3", { opacity: 1, y: "-90%", duration: 3, delay: .5, ease: "power2.out" }); let L = gsap.timeline({ scrollTrigger: { trigger: ".hz_desktop_version #sec5", start: "top 50%", end: "+=30%", scrub: t ? 1 : 2, pin: !1, anticipatePin: 1 } }); for (let x = 1; x <= 6; x++)L.to(`.hz_desktop_version .impact_card.impact_card${x}`, { x: "0%", y: "0%", rotate: "0deg", delay: .3, duration: .5, ease: "power2.out" }, 1 === x ? "<" : "<+=0.1"); function k(e) { gsap.timeline({ scrollTrigger: { trigger: "#sec9", start: "top top", end: "bottom top", scrub: 3, pin: !0, anticipatePin: 1 } }).to("#testis_wrap>.hz_testi_row", { x: e }) } if (safe.hasLib("ScrollTrigger") && safe.isFunction(ScrollTrigger.matchMedia)) ScrollTrigger.matchMedia({ "(min-width: 1400px)": () => k("-100%"), "(min-width: 1200px) and (max-width: 1399px)": () => k("-150%"), "(min-width: 992px) and (max-width: 1199px)": () => k("-200%"), "(min-width: 768px) and (max-width: 991px)": () => k("-230%"), "(min-width: 577px) and (max-width: 767px)": () => k("-685%"), "(max-width: 576px)": () => k("-685%") }); else try { k("-100%") } catch (C) { } let T = gsap.timeline({ scrollTrigger: { trigger: ".hz_desktop_version #web_app_4", start: "top 60%", end: "bottom 20%", scrub: 0, pin: !1 } }); T.to(".hz_desktop_version .idea_card.idea_card1", { y: "-30%", x: "0%", ease: "power2.inOut" }), T.to(".hz_desktop_version .idea_card.idea_card3", { y: "-30%", x: "0%", ease: "power2.inOut" }, "<"), T.to(".hz_desktop_version .idea_card.idea_card2", { y: "-30%", x: "0%", ease: "power2.inOut" }, "<"); let S = gsap.timeline({ scrollTrigger: { trigger: "#industry_inner4", start: "top 60%", end: "bottom 20%", scrub: 0, pin: !1 } }); S.to("#industry_inner_box4", { y: "-30%", x: "0%", ease: "power2.inOut" }) } catch (E) { console.warn("desktop animation error:", E) } } catch (M) { console.warn("window.onload error:", M) } }, 500) }, document.addEventListener("DOMContentLoaded", function () { try { let e = document.querySelector("#hz_header"), t = document.querySelector(".service-2"); if (e && t) { let r = e.offsetHeight + 0; t.style.top = `${r}px` } } catch (s) { console.warn("DOMContentLoaded header adjust error:", s) } }), document.addEventListener("DOMContentLoaded", () => { try { let e = document.getElementById("contactForm"), t = document.getElementById("form-message"); e && e.addEventListener("submit", r => { r.preventDefault(), t && (t.innerHTML = "", t.className = "mt-3 text-center text-light", t.innerHTML = '<div class="spinner-border text-light" role="status"><span class="visually-hidden">Loading...</span></div> Sending message...'); let s = new FormData(e), i = document.querySelector('input[name="_token"]'), o = i ? i.value : null; fetch("https://thedesignocracy.tech/thedesignocracy/send-email", { method: "POST", body: s, headers: Object.assign({ "X-Requested-With": "XMLHttpRequest" }, o ? { "X-CSRF-TOKEN": o } : {}) }).then(e => { let t = e.headers.get("content-type") || ""; return -1 !== t.indexOf("application/json") ? e.json() : e.text().then(e => { try { return JSON.parse(e) } catch (t) { return {} } }) }).then(r => { if (t) { if (r && r.success) t.innerHTML = `<div class="alert alert-success">${r.message}</div>`, e.reset(), setTimeout(() => { window.location.href = "https://thedesignocracy.com/thank-you" }, 1500); else if (t.innerHTML = `<div class="alert alert-danger">${r && r.message || "An error occurred"}</div>`, r && r.errors) { let s = '<ul class="mt-2 text-start">'; Object.values(r.errors).forEach(e => { s += `<li>${e}</li>` }), s += "</ul>"; let i = t.querySelector(".alert"); i && (i.innerHTML += s) } } }).catch(e => { console.error("Error:", e), t && (t.innerHTML = '<div class="alert alert-danger">An unexpected error occurred. Please try again later.</div>') }) }) } catch (r) { console.warn("contactForm handler error:", r) } }), document.addEventListener("DOMContentLoaded", () => { try { let e = document.getElementById("lp_cform"), t = document.getElementById("form-message2"); e && e.addEventListener("submit", r => { r.preventDefault(), t && (t.innerHTML = "", t.className = "mt-3 text-center text-light", t.innerHTML = '<div class="spinner-border text-light" role="status"><span class="visually-hidden">Loading...</span></div> Sending message...'); let s = new FormData(e), i = document.querySelector('input[name="_token"]'), o = i ? i.value : null; fetch("https://thedesignocracy.tech/thedesignocracy/send-email-landing", { method: "POST", body: s, headers: Object.assign({ "X-Requested-With": "XMLHttpRequest" }, o ? { "X-CSRF-TOKEN": o } : {}) }).then(e => { let t = e.headers.get("content-type") || ""; return -1 !== t.indexOf("application/json") ? e.json() : e.text().then(e => { try { return JSON.parse(e) } catch (t) { return {} } }) }).then(r => { if (t) { if (r && r.success) t.innerHTML = `<div class="alert alert-success">${r.message}</div>`, e.reset(), setTimeout(() => { window.location.href = "https://thedesignocracy.com/thank-you" }, 1500); else if (t.innerHTML = `<div class="alert alert-danger">${r && r.message || "An error occurred"}</div>`, r && r.errors) { let s = '<ul class="mt-2 text-start">'; Object.values(r.errors).forEach(e => { s += `<li>${e}</li>` }), s += "</ul>"; let i = t.querySelector(".alert"); i && (i.innerHTML += s) } } }).catch(e => { console.error("Error:", e), t && (t.innerHTML = '<div class="alert alert-danger">An unexpected error occurred. Please try again later.</div>') }) }) } catch (r) { console.warn("lp_cform handler error:", r) } }), document.addEventListener("DOMContentLoaded", function () { try { let e = document.querySelectorAll(".blog_content_sec a"); e.length > 0 && e.forEach(e => { e.classList.add("hover-target"), e.setAttribute("data-cursor-style", "hz_cursor_style3") }); let t = document.querySelectorAll("table"); t.length > 0 && t.forEach(e => { let t = document.createElement("div"); t.className = "table-wrapper", e.parentNode.insertBefore(t, e), t.appendChild(e) }); let r = document.getElementById("blog-post-content"), s = document.getElementById("table-of-contents"); if (r && s) { let i = r.querySelectorAll("h2, h3"); i.forEach((e, t) => { e.id = "heading-" + t; let r = document.createElement("a"); r.href = "javascript:void(0);", r.textContent = e.textContent, r.className = "H2" === e.tagName ? "d-block mb-2 f-18" : "d-block mb-1 ps-3 f-16", r.addEventListener("click", function () { let t = e.getBoundingClientRect().top + window.pageYOffset + -100; window.scrollTo({ top: t, behavior: "smooth" }) }); let i = document.createElement("li"); i.appendChild(r), s.appendChild(i) }) } let o = document.querySelector('input[name="query"]'), a = document.getElementById("search-suggestions"); o && a && o.addEventListener("input", function () { let e = this.value; if (e.length < 2) { a.innerHTML = "", a.style.display = "none"; return } fetch(`/search-posts?query=${encodeURIComponent(e)}`).then(e => e.json()).then(e => { a.innerHTML = "", e && e.length > 0 ? (e.forEach(e => { let t = document.createElement("li"); t.className = "list-group-item list-group-item-action", t.innerHTML = e.title, t.onclick = () => { window.location.href = `/blog/${e.slug}` }, a.appendChild(t) }), a.style.display = "block") : a.style.display = "none" }).catch(e => { console.warn("predictive search error:", e) }) }) } catch (n) { console.warn("DOMContentLoaded helpers error:", n) } }); try { document.querySelectorAll(".expertise_card").forEach(e => { let t = e.querySelector(".expertise_cursor"), r = !1, s = !1; try { t && safe.hasLib("gsap") ? gsap.set(t, { x: -999, y: -999 }) : t && (t.style.transform = "translate(-999px, -999px)") } catch (i) { } let o = i => { let o = e.getBoundingClientRect(), a = i.clientX - o.left, n = i.clientY - o.top; if (r || s) try { t && safe.hasLib("gsap") ? gsap.to(t, { x: a, y: n, duration: .1, ease: "power2.out" }) : t && (t.style.transform = `translate(${a}px, ${n}px)`) } catch (l) { } }, a = e => { r = !0, s = !0, o(e) }, n = i => { r = !1; let a = r => { let i = e.getBoundingClientRect(), a = r.clientX - i.left, n = r.clientY - i.top; if (a < -150 || a > i.width + 150 || n < -150 || n > i.height + 150) { s = !1; try { t && safe.hasLib("gsap") ? gsap.to(t, { x: -999, y: -999, duration: .3, ease: "power2.in" }) : t && (t.style.transform = "translate(-999px,-999px)") } catch (l) { } document.removeEventListener("mousemove", o) } }; document.addEventListener("mousemove", o), document.addEventListener("mousemove", a, { once: !0 }) }; e.addEventListener("mouseenter", a), e.addEventListener("mouseleave", n), e.addEventListener("mousemove", o) }) } catch (e) { console.warn("expertise_card block error:", e) } jQuery(document).ready(function (e) { try { if (0 === window.location.pathname.indexOf("/services")) { let t = e(".hz_header_menu .hz_menu_item:nth-child(2) .header-btn-wrapper > a"); t && t.length && t.addClass("hz_pop_btn").attr("href", "javascript:void(0)").attr("pop_id", "hz_pop1") } } catch (r) { console.warn("services nav attach error:", r) } }); const videoModal = document.getElementById("videoModal"); videoModal && (videoModal.addEventListener("show.bs.modal", e => { try { let t = e.relatedTarget, r = t?.getAttribute("data-bs-whatever"), s = videoModal.querySelector(".modal-body video"); s && r && (s.src = r) } catch (i) { console.warn("videoModal show handler error:", i) } }), videoModal.addEventListener("hidden.bs.modal", () => { try { let e = videoModal.querySelector(".modal-body video"); e && (e.pause(), e.currentTime = 0, e.removeAttribute("src"), e.load()) } catch (t) { console.warn("videoModal hidden handler error:", t) } })), document.addEventListener("DOMContentLoaded", function () { let e = document.querySelectorAll('input[name="radioDefault"]'); e.forEach(e => { e.addEventListener("change", function () { document.querySelectorAll(".hz_radios_card").forEach(e => { e.classList.remove("selected") }), this.closest(".hz_radios_card").classList.add("selected") }) }) });


$(".hz-inquiry-form-slick").slick({
    infinite: false,   // turn off infinite loop
    fade: true,        // enable fade effect
    speed: 800,
    slidesToShow: 1,
    adaptiveHeight: false
});

document.addEventListener("DOMContentLoaded", function () {
    const radios = document.querySelectorAll('input[type="radio"][name="radioDefault"]');
    const portfolioContainer = document.getElementById("selected_portfolios");
    const siteTypeEl = document.getElementById("site_type");
    const sitePriceEl = document.getElementById("site_price");

    radios.forEach((radio) => {
        radio.addEventListener("change", function () {

            document.querySelectorAll(".hz_radios_card").forEach(card => {
                card.classList.remove("selected");
            });

            const card = this.closest(".hz_radios_card");
            card.classList.add("selected");

            const jsonInput = card.querySelector(".website_port_json");
            const jsonUrl = jsonInput.value;

            console.log("Fetching JSON from:", jsonUrl);

            fetch(jsonUrl)
                .then(response => response.json())
                .then(data => {
                    console.log("Portfolio JSON Data:", data);

                    portfolioContainer.innerHTML = "";

                    if (!data.portfolio || !Array.isArray(data.portfolio)) {
                        console.error("Invalid portfolio JSON structure");
                        return;
                    }

                    if (data.portfolio.length > 0) {
                        const firstItem = data.portfolio[0];

                        if (siteTypeEl) siteTypeEl.textContent = firstItem.title;
                        if (sitePriceEl) sitePriceEl.textContent = firstItem.price;
                    }

                    // ---- LOOP PORTFOLIO ITEMS ----
                    data.portfolio.forEach((item, index) => {
                        const col = document.createElement("div");

                        col.className = "col-lg-4 col-md-6 col-12 mb-md-0 mb-4";

                        col.innerHTML = `
                            <div class="portfolio_card h-100 position-relative overflow-hidden">

                                <!-- CHECKBOX -->
                                <input type="checkbox" name="portfolio_check[]" class="portfolio_check" data-port-id="${index}" value="${item.popup_image}" style="position:absolute; top:0; left:0; width:100%; height:100%; z-index:5;opacity:0;">
                                <div class="checked_overlay position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center opacity-0">
                                    <i class="fa-regular fa-circle-check"></i>
                                </div>


                                <!-- IMAGE OPENING MODAL -->
                                <div data-bs-port="${item.popup_image}" data-port-id="${index}" class="d-block" data-bs-toggle="modal" data-bs-target="#portfolio_image_modal">
                                    <img src="${item.thumbnail}" class="img-fluid w-100 rounded">
                                </div>
                            </div>`;

                        portfolioContainer.appendChild(col);
                    });
                })
                .catch(error => {
                    console.error("Error loading JSON:", error);
                });
        });
    });
});


// ----------------------------------------------------------------------------------
//  MODAL LOGIC (working with your HTML)
// ----------------------------------------------------------------------------------

let current_port_id = null;
const portfolio_image_modal = document.getElementById('portfolio_image_modal');

if (portfolio_image_modal) {
    portfolio_image_modal.addEventListener('show.bs.modal', event => {

        const button = event.relatedTarget;

        const port_img_url = button.getAttribute('data-bs-port');
        current_port_id = button.getAttribute('data-port-id');

        const modalImage = portfolio_image_modal.querySelector('#portfolio_image_modal_img');
        modalImage.src = port_img_url;
    });
}


// ----------------------------------------------------------------------------------
//  SELECT BUTTON INSIDE MODAL
// ----------------------------------------------------------------------------------

document.addEventListener("click", function (e) {

    if (e.target.classList.contains("select_port_btn")) {

        if (current_port_id === null) return;

        const checkbox = document.querySelector(
            `.portfolio_check[data-port-id="${current_port_id}"]`
        );

        if (checkbox) {

            checkbox.checked = true;
            checkbox.closest(".portfolio_card").classList.add("selected_ref");

            // ************* FIX: Set checkbox value to modal image URL *************
            const modalImg = document.querySelector("#portfolio_image_modal_img");
            if (modalImg && modalImg.src) {
                checkbox.value = modalImg.src;
            }
            // *************************************************************************
        }
    }
});


$('.hz_slick_btn_prev').on('click', function(){
    $('.hz-inquiry-form button.slick-prev.slick-arrow').trigger('click');
});

$('.hz_slick_btn_next').on('click', function(){
    $('.hz-inquiry-form button.slick-next.slick-arrow').trigger('click');
});

$('.hz_radios_card').on('click', function () {
  setTimeout(function () {
    $('.hz-inquiry-form button.slick-next.slick-arrow').trigger('click');
  }, 1000); // 1 second delay
});

// increase progress bar width on each step
$('.inner_form_inner_sec1 .hz_radios_card').on('click', function(){
    $('#hz_header .bar_fill').css('width' , '25%');
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

$('.inner_form_inner_sec2 .hz_slick_btn_next').on('click', function(){
    $('#hz_header .bar_fill').css('width' , '50%');
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

$('.inner_form_inner_sec3 .hz_slick_btn_next').on('click', function(){
    $('#hz_header .bar_fill').css('width' , '75%');
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

$('.inner_form_inner_sec4 .hz_slick_btn_next').on('click', function(){
    $('#hz_header .bar_fill').css('width' , '100%');
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

$('.inner_form_inner_sec2 .hz_slick_btn_prev').on('click', function(){
    $('#hz_header .bar_fill').css('width' , '0%');
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

$('.inner_form_inner_sec3 .hz_slick_btn_prev').on('click', function(){
    $('#hz_header .bar_fill').css('width' , '25%');
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

$('.inner_form_inner_sec4 .hz_slick_btn_prev').on('click', function(){
    $('#hz_header .bar_fill').css('width' , '50%');
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("hzInquiryForm");

    if (!form) return;

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        let fd = new FormData(form);

        fetch(form.action, {
            method: "POST",
            headers: {
                "X-Requested-With": "XMLHttpRequest",
                "X-CSRF-TOKEN": form.querySelector('input[name="_token"]').value
            },
            body: fd
        })
        .then(res => res.json())
        .then(data => {

            if (data.success) {
                hzToast(data.message, "success");

                // NEXT SLIDE
                document.querySelector(".hz-inquiry-form button.slick-next.slick-arrow")
                    ?.click();
                // Set progress bar to 100%
                document.querySelector("#hz_header .bar_fill").style.width = "100%";

                form.reset();
            } else {
                hzToast(data.message || "Something went wrong", "error");
            }

        })
        .catch(() => {
            hzToast("Server error occurred", "error");
        });
    });

});


// Select your scrollable modal body
const modalScrollable = document.querySelector('#portfolio_image_modal .modal-dialog-scrollable .modal-body');

if (modalScrollable) {
    // Allow scrolling inside this element
    modalScrollable.addEventListener('wheel', function (e) {
        const scrollTop = modalScrollable.scrollTop;
        const scrollHeight = modalScrollable.scrollHeight;
        const height = modalScrollable.clientHeight;

        const isScrollingUp = e.deltaY < 0;
        const isScrollingDown = e.deltaY > 0;

        // If scrolling UP and already at top → let event bubble to Lenis
        if (isScrollingUp && scrollTop === 0) return;

        // If scrolling DOWN and already at bottom → let event bubble to Lenis
        if (isScrollingDown && scrollTop + height >= scrollHeight) return;

        // Otherwise prevent Lenis from taking over
        e.stopPropagation();
    }, { passive: false });
}