/* === Safe utilities === */
const safe = {
    exists: (x) => typeof x !== "undefined" && x !== null,
    isFunction: (f) => typeof f === "function",
    hasLib: (name) => typeof window[name] !== "undefined",
    q: (sel, ctx = document) => ctx.querySelector(sel),
    qAll: (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel || "")),
    hasEl: (sel, ctx = document) => !!ctx.querySelector(sel),
};

/* ===== original functions (made resilient but unchanged behavior) ===== */

function checkMobile() {
    // preserve exact remove() behavior but guard against errors if elements absent
    try {
        if ($(window).width() <= 767) {
            $("body")
                .addClass("hz_mobile_version")
                .removeClass("hz_desktop_version");
            if ($(".hz-desktop-sec").length) $(".hz-desktop-sec").remove();
        } else {
            $("body")
                .addClass("hz_desktop_version")
                .removeClass("hz_mobile_version");
            if ($(".hz-mobile-sec").length) $(".hz-mobile-sec").remove();
        }
    } catch (err) {
        // fail silently so page doesn't break
        console.warn("checkMobile error:", err);
    }
}

function initOwlCarousels() {
    // wrap each init so one failing carousel doesn't stop the rest
    try {
        if (safe.hasLib("jQuery") && safe.isFunction(jQuery().owlCarousel)) {
            jQuery("#partners_slider").owlCarousel({
                autoplay: !0,
                rewind: !1,
                margin: 10,
                loop: !0,
                responsiveClass: !0,
                autoHeight: !1,
                autoplayTimeout: 3e3,
                smartSpeed: 800,
                nav: !1,
                touchDrag: !0,
                mouseDrag: !0,
                responsive: {
                    0: {
                        items: 1,
                        stagePadding: 20,
                        autoHeight: !1,
                    },
                    576: {
                        items: 2,
                        stagePadding: 30,
                    },
                    768: {
                        items: 3,
                    },
                    992: {
                        items: 4,
                    },
                    1200: {
                        items: 4,
                    },
                    1440: {
                        items: 5,
                    },
                },
            });
        } else {
            // if owlCarousel isn't present, still preserve behavior silently
            console.warn("owlCarousel not available for #partners_slider");
        }
    } catch (err) {
        console.warn("partners_slider init error:", err);
    }

    try {
        if (safe.hasLib("jQuery") && safe.isFunction(jQuery().owlCarousel)) {
            jQuery("#success_stories_slider").owlCarousel({
                autoplay: !0,
                rewind: !1,
                margin: 10,
                loop: !0,
                responsiveClass: !0,
                autoHeight: !0,
                autoplayTimeout: 3e3,
                smartSpeed: 800,
                nav: !1,
                touchDrag: !0,
                mouseDrag: !0,
                responsive: {
                    0: {
                        items: 1,
                        stagePadding: 20,
                        margin: 0,
                    },
                    576: {
                        items: 1,
                        stagePadding: 10,
                        margin: 0,
                    },
                    768: {
                        items: 2,
                    },
                    992: {
                        items: 2,
                    },
                    1200: {
                        items: 2,
                    },
                    1400: {
                        items: 3,
                    },
                },
            });
        } else {
            console.warn(
                "owlCarousel not available for #success_stories_slider"
            );
        }
    } catch (err) {
        console.warn("success_stories_slider init error:", err);
    }

    try {
        if (safe.hasLib("jQuery") && safe.isFunction(jQuery().owlCarousel)) {
            jQuery(".industries_slider").owlCarousel({
                autoplay: !0,
                rewind: !1,
                margin: 10,
                loop: !0,
                responsiveClass: !0,
                autoHeight: !0,
                autoplayTimeout: 3e3,
                smartSpeed: 800,
                nav: !1,
                autoWidth: !0,
                touchDrag: !0,
                mouseDrag: !0,
                responsive: {
                    0: {
                        items: 2,
                        stagePadding: 20,
                        margin: 0,
                    },
                    576: {
                        items: 2,
                    },
                    768: {
                        items: 5,
                    },
                    992: {
                        items: 6,
                    },
                    1200: {
                        items: 7,
                    },
                    1400: {
                        items: 7,
                    },
                },
            });
        } else {
            console.warn("owlCarousel not available for .industries_slider");
        }
    } catch (err) {
        console.warn("industries_slider init error:", err);
    }

    // lp1 slider (saved as owl variable for nav)
    var owl = null;
    try {
        if (safe.hasLib("jQuery") && safe.isFunction(jQuery().owlCarousel)) {
            owl = jQuery("#lp1_slider").owlCarousel({
                autoplay: !0,
                rewind: !1,
                margin: 0,
                loop: !0,
                responsiveClass: !0,
                autoHeight: !0,
                autoplayTimeout: 3e3,
                smartSpeed: 800,
                nav: !1, // Keep navigation disabled
                autoWidth: !1,
                touchDrag: !0,
                mouseDrag: !0,
                responsive: {
                    0: { items: 1 },
                    576: { items: 1 },
                    768: { items: 1 },
                    992: { items: 1 },
                    1200: { items: 1 },
                    1400: { items: 1 },
                },
            });
        } else {
            console.warn("owlCarousel not available for #lp1_slider");
        }
    } catch (err) {
        console.warn("lp1_slider init error:", err);
    }

    try {
        if (safe.hasLib("jQuery") && safe.isFunction(jQuery().owlCarousel)) {
            jQuery("#clutch_reviews_slider").owlCarousel({
                autoplay: !0,
                rewind: !1,
                margin: 20,
                loop: !0,
                responsiveClass: !0,
                autoHeight: !0,
                autoplayTimeout: 3e3,
                smartSpeed: 800,
                nav: !1,
                autoWidth: !1,
                touchDrag: !0,
                mouseDrag: !0,
                responsive: {
                    0: { items: 1 },
                    576: { items: 1 },
                    768: { items: 2 },
                    992: { items: 3 },
                    1200: { items: 3 },
                    1400: { items: 3 },
                },
            });
        } else {
            console.warn(
                "owlCarousel not available for #clutch_reviews_slider"
            );
        }
    } catch (err) {
        console.warn("clutch_reviews_slider init error:", err);
    }

    try {
        if (safe.hasLib("jQuery") && safe.isFunction(jQuery().owlCarousel)) {
            jQuery("#process_slider").owlCarousel({
                autoplay: !0,
                rewind: !1,
                margin: 20,
                loop: !0,
                responsiveClass: !0,
                autoHeight: !0,
                autoplayTimeout: 3e3,
                smartSpeed: 800,
                nav: !1,
                autoWidth: !1,
                touchDrag: !0,
                mouseDrag: !0,
                responsive: {
                    0: { items: 1 },
                    576: { items: 1 },
                    768: { items: 1 },
                    992: { items: 1 },
                    1200: { items: 2 },
                    1441: { items: 2 },
                    1442: { items: 3 },
                },
            });
        } else {
            console.warn("owlCarousel not available for #process_slider");
        }
    } catch (err) {
        console.warn("process_slider init error:", err);
    }

    // Custom navigation (guarded so click handlers won't error)
    try {
        jQuery("#lp1 .hz-slider-btn-prev").click(function () {
            try {
                if (owl && owl.trigger) owl.trigger("prev.owl.carousel");
            } catch (e) {
                /* ignore */
            }
        });
        jQuery("#lp1 .hz-slider-btn-next").click(function () {
            try {
                if (owl && owl.trigger) owl.trigger("next.owl.carousel");
            } catch (e) {
                /* ignore */
            }
        });
    } catch (err) {
        console.warn("lp1 nav attach error:", err);
    }
}

function initSlickSliders() {
    try {
        if (safe.hasLib("jQuery") && safe.isFunction(jQuery().slick)) {
            $(".sec2_logo_slider").slick({
                slidesToShow: 10,
                slidesToScroll: 1,
                autoplay: !0,
                arrows: !1,
                dots: !1,
                autoplaySpeed: 0,
                speed: 1e3,
                pauseOnHover: !1,
                cssEase: "linear",
                responsive: [
                    {
                        breakpoint: 1400,
                        settings: {
                            slidesToShow: 7,
                        },
                    },
                    {
                        breakpoint: 992,
                        settings: {
                            slidesToShow: 3,
                        },
                    },
                ],
            });
        } else {
            console.warn("slick not available for .sec2_logo_slider");
        }
    } catch (err) {
        console.warn("sec2_logo_slider init error:", err);
    }

    try {
        if (safe.hasLib("jQuery") && safe.isFunction(jQuery().slick)) {
            $(".sec4_tags_slider").slick({
                slidesToShow: 10,
                slidesToScroll: 1,
                autoplay: !0,
                arrows: !1,
                dots: !1,
                autoplaySpeed: 0,
                speed: 8e3,
                pauseOnHover: !1,
                cssEase: "linear",
                variableWidth: !0,
            });
        } else {
            console.warn("slick not available for .sec4_tags_slider");
        }
    } catch (err) {
        console.warn("sec4_tags_slider init error:", err);
    }
}

// Disable browser's scroll restoration behavior
if ("scrollRestoration" in history) {
    history.scrollRestoration = "manual";
}

// Remove loader class after 1 second when page loads
window.addEventListener("load", function () {
    try {
        const loader = document.querySelector(".custom-cursor");
        if (loader) {
            setTimeout(() => {
                loader.classList.remove("hz-loader");
            }, 1000);
        }
    } catch (err) {
        console.warn("loader removal error:", err);
    }
});

// Add/remove class from header based on scroll position
$(window).scroll(function () {
    try {
        if ($(this).scrollTop() > $(window).height()) {
            $(".homepage #hz_header").addClass("newClass");
        } else {
            $(".homepage #hz_header").removeClass("newClass");
        }
    } catch (err) {
        console.warn("scroll handler1 error:", err);
    }
});

$(window).scroll(function () {
    try {
        if ($(this).scrollTop() > 100) {
            $("#hz_header:not(.homepage #hz_header)").addClass("newClass");
        } else {
            $("#hz_header:not(.homepage #hz_header)").removeClass("newClass");
        }
    } catch (err) {
        console.warn("scroll handler2 error:", err);
    }
});

// Scroll to top when page is about to unload
$(window).on("beforeunload", function () {
    try {
        $(window).scrollTop(0);
    } catch (err) {
        /* ignore */
    }
});

// Document ready function
$(document).ready(function () {
    try {
        // Initialize functions
        checkMobile();
        initOwlCarousels();
        initSlickSliders();

        // Check mobile on resize
        $(window).resize(function () {
            checkMobile();
        });

        // Scale down effect on slider items when mouse down
        $("#partners_slider, #success_stories_slider, #industries_slider")
            .on("mousedown", function () {
                $(this)
                    .find(
                        ".partner_slide, .success_stories_slide, .industries_slide"
                    )
                    .css("transform", "scale(0.95)");
            })
            .on("mouseup mouseleave", function () {
                $(this)
                    .find(
                        ".partner_slide, .success_stories_slide, .industries_slide"
                    )
                    .css("transform", "scale(1)");
            });

        // Mobile menu toggle
        $(".mobile-menu-main-wrap .hz-hamburger label svg").click(function () {
            $(".hz-full-screen-menu").toggleClass("hz_closed hz_opened");
        });

        // Close mobile menu when item is clicked
        $(".hz_mobile_menu .hz_header_menu .hz_menu_item").click(function () {
            $(".hz-full-screen-menu")
                .removeClass("hz_opened")
                .addClass("hz_closed");
            $('.hamburger input[type="checkbox"]').prop("checked", false);
        });

        // Popup video functionality
        $(".hz_pop_btn").on("click", function () {
            const popupId = $(this).attr("pop_id");
            const popup = $("#" + popupId);
            popup.addClass("active");
            const video = popup.find("video").get(0);
            if (video) {
                try {
                    video.currentTime = 0;
                } catch (e) {
                    /* ignore */
                }
                video.play();
            }
        });

        // Close popup
        $(".hz_close_btn").on("click", function () {
            const popup = $(this).closest(".hz_pop");
            popup.removeClass("active");
            const video = popup.find("video").get(0);
            if (video) {
                try {
                    video.pause();
                } catch (e) {
                    /* ignore */
                }
            }
        });

        // Close popup when clicking outside content
        $(".hz_pop").on("click", function (e) {
            if ($(e.target).is(".hz_pop")) {
                $(this).removeClass("active");
                const video = $(this).find("video").get(0);
                if (video) {
                    try {
                        video.pause();
                    } catch (e) {
                        /* ignore */
                    }
                }
            }
        });
    } catch (err) {
        console.warn("document ready error:", err);
    }
});

// Window onload function
window.onload = () => {
    setTimeout(() => {
        try {
            // Scroll to top on load
            window.scrollTo(0, 0);

            const isMobile = $("body").hasClass("hz_mobile_version");
            const isLowPerformance =
                navigator.hardwareConcurrency &&
                navigator.hardwareConcurrency < 4;

            if (!isMobile) {
                // Initialize smooth scrolling with Lenis if available
                if (safe.hasLib("Lenis")) {
                    try {
                        const lenis = new Lenis({
                            lerp: isLowPerformance ? 0.15 : 0.03,
                            smoothWheel: true,
                            smoothTouch: true,
                            infinite: false,
                        });

                        setTimeout(() => {
                            if (
                                safe.exists(lenis) &&
                                safe.isFunction(lenis.scrollTo)
                            ) {
                                lenis.scrollTo(0, { immediate: true });
                            }
                        }, 50);

                        // Connect Lenis with ScrollTrigger if ScrollTrigger exists
                        if (safe.hasLib("ScrollTrigger")) {
                            try {
                                // ensure ScrollTrigger is registered with GSAP before using
                                if (
                                    safe.hasLib("gsap") &&
                                    safe.isFunction(gsap.registerPlugin)
                                ) {
                                    try {
                                        gsap.registerPlugin(ScrollTrigger);
                                    } catch (e) {
                                        /* ignore */
                                    }
                                }
                                if (
                                    safe.hasLib("ScrollTrigger") &&
                                    safe.isFunction(ScrollTrigger.update)
                                ) {
                                    lenis.on("scroll", ScrollTrigger.update);
                                }
                            } catch (err) {
                                console.warn(
                                    "lenis <-> ScrollTrigger connect error:",
                                    err
                                );
                            }
                        }

                        if (
                            safe.hasLib("gsap") &&
                            gsap &&
                            gsap.ticker &&
                            safe.isFunction(gsap.ticker.add)
                        ) {
                            try {
                                gsap.ticker.add((time) => {
                                    try {
                                        lenis.raf(time * 1000);
                                    } catch (e) {
                                        /* ignore */
                                    }
                                });
                            } catch (err) {
                                console.warn("gsap.ticker.add error:", err);
                            }
                        }
                    } catch (err) {
                        console.warn("Lenis init error:", err);
                    }
                } else {
                    // If Lenis isn't present, nothing to do; original code used Lenis so behavior changes only if missing library
                    // but we don't want to break the page.
                }

                // Smooth scroll for anchor links — only attempt if lenis exists, otherwise original code would have failed; keep behavior same when present
                document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
                    anchor.addEventListener("click", function (e) {
                        try {
                            const targetId = this.getAttribute("href");
                            const target = document.querySelector(targetId);
                            if (target && safe.hasLib("Lenis")) {
                                e.preventDefault();
                                try {
                                    // use lenis instance if present
                                    if (
                                        window.lenis &&
                                        safe.isFunction(window.lenis.scrollTo)
                                    ) {
                                        window.lenis.scrollTo(target, {
                                            offset: 0,
                                            duration: 1.5,
                                            easing: (t) =>
                                                1 - Math.pow(1 - t, 3),
                                        });
                                    } else {
                                        // If lenis not globally stored, try to create a short runner if library present
                                        if (safe.hasLib("Lenis")) {
                                            const tmp = new Lenis();
                                            if (
                                                tmp &&
                                                safe.isFunction(tmp.scrollTo)
                                            )
                                                tmp.scrollTo(target, {
                                                    offset: 0,
                                                    duration: 1.5,
                                                });
                                        }
                                    }
                                } catch (err) {
                                    /* ignore */
                                }
                            } else if (target) {
                                // fallback to native smooth scroll to preserve usability if lenis missing
                                e.preventDefault();
                                target.scrollIntoView({
                                    behavior: "smooth",
                                    block: "start",
                                });
                            }
                        } catch (err) {
                            console.warn("anchor click handler error:", err);
                        }
                    });
                });

                // GSAP performance settings if GSAP exists
                if (safe.hasLib("gsap")) {
                    try {
                        if (gsap.ticker && safe.isFunction(gsap.ticker.fps))
                            gsap.ticker.fps(60);
                    } catch (e) {
                        /* ignore */
                    }
                    try {
                        if (
                            gsap.ticker &&
                            safe.isFunction(gsap.ticker.lagSmoothing)
                        )
                            gsap.ticker.lagSmoothing(0);
                    } catch (e) {
                        /* ignore */
                    }
                }
                if (safe.hasLib("ScrollTrigger")) {
                    try {
                        if (safe.isFunction(ScrollTrigger.normalizeScroll))
                            ScrollTrigger.normalizeScroll(true);
                    } catch (e) {
                        /* ignore */
                    }
                }
            }

            // Register GSAP plugins (do this late as original did)
            if (
                safe.hasLib("gsap") &&
                safe.hasLib("ScrollTrigger") &&
                safe.isFunction(gsap.registerPlugin)
            ) {
                try {
                    gsap.registerPlugin(ScrollTrigger);
                } catch (err) {
                    console.warn("gsap.registerPlugin error:", err);
                }
            }

            if (isMobile) {
                // Mobile animations (kept intact, guarded where necessary)
                try {
                    const heroSvg = document.querySelector(
                        ".hz_mobile_version .hz-hero-title > svg"
                    );
                    const isSmallScreen = window.innerWidth < 410;

                    const heroTimeline = gsap.timeline({
                        scrollTrigger: {
                            trigger: ".hz_mobile_version #hero",
                            start: "top top",
                            end: "+=100%",
                            scrub: 5,
                            pin: true,
                        },
                    });

                    const svgXPos =
                        window.innerWidth < 410
                            ? "-38vw"
                            : isSmallScreen
                            ? "-39.5vw"
                            : -145;

                    // guard heroSvg usage (if null, it will still add the timeline with selectors)
                    if (heroSvg) {
                        heroTimeline.to(heroSvg, {
                            width: isSmallScreen ? 120 : 152,
                            x: svgXPos,
                            top: isSmallScreen ? 21 : 39,
                            ease: "power2.inOut",
                            duration: 3,
                        });
                    } else {
                        // if element missing, run the timeline against selector strings so animations using selectors still run
                        heroTimeline.to(
                            ".hz_mobile_version .hz-hero-title > svg",
                            {
                                width: isSmallScreen ? 120 : 152,
                                x: svgXPos,
                                top: isSmallScreen ? 21 : 39,
                                ease: "power2.inOut",
                                duration: 3,
                            }
                        );
                    }

                    heroTimeline.to(
                        ".hz_mobile_version .hz-hero-content",
                        {
                            y: "-100vh",
                            ease: "power2.inOut",
                            duration: 4,
                            delay: 1,
                        },
                        "<"
                    );

                    heroTimeline.to(
                        ".hz_mobile_version .hz_port_slides",
                        {
                            scale: 1,
                            top: "55%",
                            duration: 3,
                            ease: "power2.out",
                            delay: 1,
                        },
                        "<"
                    );

                    heroTimeline.to(
                        ".hz_mobile_version .header_logo_text > svg",
                        {
                            opacity: 1,
                            duration: 1,
                            ease: "power2.out",
                            delay: 1,
                        }
                    );

                    heroTimeline.to(
                        ".hz_mobile_version .hz-hero-title > svg",
                        {
                            opacity: 0,
                            duration: 0.1,
                            ease: "power2.out",
                            delay: 0.5,
                        },
                        "<"
                    );

                    heroTimeline.to(
                        ".hz_mobile_version .hz_port_slides .hz_port_slide.hz_port_slide2",
                        {
                            opacity: 1,
                            y: "-95%",
                            duration: 3,
                            ease: "power2.out",
                        }
                    );

                    heroTimeline.to(
                        ".hz_mobile_version .hz_port_slides .hz_port_slide.hz_port_slide3",
                        {
                            opacity: 1,
                            y: "-90%",
                            duration: 3,
                            ease: "power2.out",
                        }
                    );

                    // Impact cards animation
                    const impactTimeline = gsap.timeline({
                        scrollTrigger: {
                            trigger: ".hz_mobile_version #sec5",
                            start: "top 40%",
                            end: "+=80%",
                            scrub: 0,
                        },
                    });

                    for (let i = 1; i <= 6; i++) {
                        impactTimeline.to(
                            `.hz_mobile_version .impact_card.impact_card${i}`,
                            {
                                x: "0%",
                                y: "0%",
                                rotate: "0deg",
                                delay: i > 1 ? 0.3 : 0,
                            },
                            "<"
                        );
                    }

                    // Testimonials section animation
                    gsap.timeline({
                        scrollTrigger: {
                            trigger: ".hz_mobile_version #sec9",
                            start: "top top",
                            end: "bottom top",
                            scrub: 3,
                            pin: true,
                        },
                    }).to(".hz_mobile_version #testis_wrap>.hz_testi_row", {
                        x: "-685%",
                        ease: "none",
                    });

                    const idea_cards_timeline_mobile = gsap.timeline({
                        scrollTrigger: {
                            trigger: ".hz_mobile_version #web_app_4",
                            start: "top 60%",
                            end: "bottom 20%",
                            scrub: 0,
                            pin: false,
                        },
                    });

                    idea_cards_timeline_mobile.to(
                        ".hz_mobile_version .idea_card.idea_card1",
                        {
                            y: "-30%",
                            x: "0%",
                            ease: "power2.inOut",
                        }
                    );

                    idea_cards_timeline_mobile.to(
                        ".hz_mobile_version .idea_card.idea_card3",
                        {
                            y: "-30%",
                            x: "0%",
                            ease: "power2.inOut",
                        },
                        "<"
                    );

                    idea_cards_timeline_mobile.to(
                        ".hz_mobile_version .idea_card.idea_card2",
                        {
                            y: "-30%",
                            x: "0%",
                            ease: "power2.inOut",
                        },
                        "<"
                    );

                    const industry_inner_box4 = gsap.timeline({
                        scrollTrigger: {
                            trigger: "#industry_inner4",
                            start: "top 60%",
                            end: "bottom 20%",
                            scrub: 0,
                            pin: false,
                        },
                    });

                    industry_inner_box4.to("#industry_inner_box4", {
                        y: "-30%",
                        x: "0%",
                        ease: "power2.inOut",
                    });
                } catch (err) {
                    console.warn("mobile animation error:", err);
                }
            } else {
                // Desktop animations
                try {
                    const desktopHeroSvg = document.querySelector(
                        ".hz_desktop_version .hz-hero-title > svg"
                    );

                    // Hero section timeline
                    const desktopHeroTimeline = gsap.timeline({
                        scrollTrigger: {
                            trigger: ".hz_desktop_version #hero_wraps",
                            start: "top top",
                            end: "+=120%",
                            scrub: 3,
                            pin: true,
                            anticipatePin: 1,
                        },
                    });

                    let svgXPosition;
                    if (window.innerWidth <= 768 || window.innerWidth <= 991) {
                        svgXPosition = "-43.2vw";
                    } else if (window.innerWidth <= 1199) {
                        svgXPosition = "-44.7vw";
                    } else if (window.innerWidth <= 1400) {
                        svgXPosition = "-45.65vw";
                    } else if (window.innerWidth <= 1720) {
                        svgXPosition = "-46.3vw";
                    } else {
                        svgXPosition = "-808px";
                    }

                    if (desktopHeroSvg) {
                        desktopHeroTimeline.to(desktopHeroSvg, {
                            width: 152,
                            x: svgXPosition,
                            top: 40,
                            ease: "power2.inOut",
                            duration: 3,
                        });
                    } else {
                        desktopHeroTimeline.to(
                            ".hz_desktop_version .hz-hero-title > svg",
                            {
                                width: 152,
                                x: svgXPosition,
                                top: 40,
                                ease: "power2.inOut",
                                duration: 3,
                            }
                        );
                    }

                    desktopHeroTimeline.to(
                        ".hz_desktop_version .hz-hero-content",
                        {
                            y: "-100vh",
                            ease: "power2.inOut",
                            duration: 3,
                            delay: 0.5,
                        },
                        "<"
                    );

                    desktopHeroTimeline.to(
                        ".hz_desktop_version #hero .hz-row.hz-row2",
                        {
                            opacity: 0,
                            ease: "power2.inOut",
                            duration: 1,
                        },
                        "<"
                    );

                    desktopHeroTimeline.to(
                        ".hz_desktop_version .hz_port_slides",
                        {
                            scale: 1,
                            top: "53%",
                            duration: 3,
                            ease: "power2.out",
                            delay: 1,
                        },
                        "<"
                    );

                    desktopHeroTimeline.to(
                        ".hz_desktop_version .header_logo_text > svg",
                        {
                            opacity: 1,
                            duration: 1,
                            ease: "power2.out",
                            delay: 1,
                        }
                    );

                    desktopHeroTimeline.to(
                        ".hz_desktop_version .hz-hero-title > svg",
                        {
                            opacity: 0,
                            duration: 0.1,
                            ease: "power2.out",
                            delay: 0.5,
                        },
                        "<"
                    );

                    desktopHeroTimeline.to(
                        ".hz_desktop_version .hz_port_slides .hz_port_slide.hz_port_slide2",
                        {
                            opacity: 1,
                            y: "-95%",
                            duration: 3,
                            ease: "power2.out",
                            delay: 0.5,
                        }
                    );

                    desktopHeroTimeline.to(
                        ".hz_desktop_version .hz_port_slides .hz_port_slide.hz_port_slide3",
                        {
                            opacity: 1,
                            y: "-90%",
                            duration: 3,
                            delay: 0.5,
                            ease: "power2.out",
                        }
                    );

                    // Impact cards animation
                    const desktopImpactTimeline = gsap.timeline({
                        scrollTrigger: {
                            trigger: ".hz_desktop_version #sec5",
                            start: "top 50%",
                            end: "+=30%",
                            scrub: isLowPerformance ? 1 : 2,
                            pin: false,
                            anticipatePin: 1,
                        },
                    });

                    const duration = 0.5;
                    for (let i = 1; i <= 6; i++) {
                        desktopImpactTimeline.to(
                            `.hz_desktop_version .impact_card.impact_card${i}`,
                            {
                                x: "0%",
                                y: "0%",
                                rotate: "0deg",
                                delay: 0.3,
                                duration: duration,
                                ease: "power2.out",
                            },
                            i === 1 ? "<" : "<+=0.1"
                        );
                    }

                    // Testimonials section animation with responsive settings
                    function setupTestimonialsAnimation(xPosition) {
                        gsap.timeline({
                            scrollTrigger: {
                                trigger: "#sec9",
                                start: "top top",
                                end: "bottom top",
                                scrub: 3,
                                pin: true,
                                anticipatePin: 1,
                            },
                        }).to("#testis_wrap>.hz_testi_row", {
                            x: xPosition,
                        });
                    }

                    if (
                        safe.hasLib("ScrollTrigger") &&
                        safe.isFunction(ScrollTrigger.matchMedia)
                    ) {
                        ScrollTrigger.matchMedia({
                            "(min-width: 1400px)": () =>
                                setupTestimonialsAnimation("-100%"),
                            "(min-width: 1200px) and (max-width: 1399px)": () =>
                                setupTestimonialsAnimation("-150%"),
                            "(min-width: 992px) and (max-width: 1199px)": () =>
                                setupTestimonialsAnimation("-200%"),
                            "(min-width: 768px) and (max-width: 991px)": () =>
                                setupTestimonialsAnimation("-230%"),
                            "(min-width: 577px) and (max-width: 767px)": () =>
                                setupTestimonialsAnimation("-685%"),
                            "(max-width: 576px)": () =>
                                setupTestimonialsAnimation("-685%"),
                        });
                    } else {
                        // Fallback: run once with the largest shift so testimonials animate somewhat
                        try {
                            setupTestimonialsAnimation("-100%");
                        } catch (e) {
                            /* ignore */
                        }
                    }

                    const idea_cards_timeline = gsap.timeline({
                        scrollTrigger: {
                            trigger: ".hz_desktop_version #web_app_4",
                            start: "top 60%",
                            end: "bottom 20%",
                            scrub: 0,
                            pin: false,
                        },
                    });

                    idea_cards_timeline.to(
                        ".hz_desktop_version .idea_card.idea_card1",
                        {
                            y: "-30%",
                            x: "0%",
                            ease: "power2.inOut",
                        }
                    );

                    idea_cards_timeline.to(
                        ".hz_desktop_version .idea_card.idea_card3",
                        {
                            y: "-30%",
                            x: "0%",
                            ease: "power2.inOut",
                        },
                        "<"
                    );

                    idea_cards_timeline.to(
                        ".hz_desktop_version .idea_card.idea_card2",
                        {
                            y: "-30%",
                            x: "0%",
                            ease: "power2.inOut",
                        },
                        "<"
                    );

                    const industry_inner_box4 = gsap.timeline({
                        scrollTrigger: {
                            trigger: "#industry_inner4",
                            start: "top 60%",
                            end: "bottom 20%",
                            scrub: 0,
                            pin: false,
                        },
                    });

                    industry_inner_box4.to("#industry_inner_box4", {
                        y: "-30%",
                        x: "0%",
                        ease: "power2.inOut",
                    });
                } catch (err) {
                    console.warn("desktop animation error:", err);
                }
            }
        } catch (err) {
            console.warn("window.onload error:", err);
        }
    }, 500);
};

/* ========== DOMContentLoaded helpers (unchanged logic, safer guards) ========== */

document.addEventListener("DOMContentLoaded", function () {
    try {
        const header = document.querySelector("#hz_header");
        const firstSection = document.querySelector(".service-2");

        if (header && firstSection) {
            let additionalPadding = 0;

            const headerHeight = header.offsetHeight + additionalPadding;
            firstSection.style.top = `${headerHeight}px`;
        }
    } catch (err) {
        console.warn("DOMContentLoaded header adjust error:", err);
    }
});

document.addEventListener("DOMContentLoaded", () => {
    try {
        const e = document.getElementById("contactForm"),
            o = document.getElementById("form-message");

        e &&
            e.addEventListener("submit", (t) => {
                t.preventDefault();
                if (o) {
                    o.innerHTML = "";
                    o.className = "mt-3 text-center text-light";
                    o.innerHTML =
                        '<div class="spinner-border text-light" role="status"><span class="visually-hidden">Loading...</span></div> Sending message...';
                }

                const s = new FormData(e);

                // safe CSRF read
                const tokenEl = document.querySelector('input[name="_token"]');
                const csrf = tokenEl ? tokenEl.value : null;

                fetch(
                    "https://thedesignocracy.tech/thedesignocracy/send-email",
                    {
                        method: "POST",
                        body: s,
                        headers: Object.assign(
                            {
                                "X-Requested-With": "XMLHttpRequest",
                            },
                            csrf ? { "X-CSRF-TOKEN": csrf } : {}
                        ),
                    }
                )
                    .then((e) => {
                        // guard JSON parse
                        const ct = e.headers.get("content-type") || "";
                        if (ct.indexOf("application/json") !== -1)
                            return e.json();
                        return e.text().then((txt) => {
                            try {
                                return JSON.parse(txt);
                            } catch (err) {
                                return {};
                            }
                        });
                    })
                    .then((t) => {
                        if (!o) return;
                        if (t && t.success) {
                            o.innerHTML = `<div class="alert alert-success">${t.message}</div>`;
                            e.reset();
                            setTimeout(() => {
                                window.location.href =
                                    "https://thedesignocracy.com/thank-you";
                            }, 1500); // optional delay before redirect
                        } else {
                            o.innerHTML = `<div class="alert alert-danger">${
                                (t && t.message) || "An error occurred"
                            }</div>`;
                            if (t && t.errors) {
                                let ehtml = '<ul class="mt-2 text-start">';
                                Object.values(t.errors).forEach((o) => {
                                    ehtml += `<li>${o}</li>`;
                                });
                                ehtml += "</ul>";
                                const alert = o.querySelector(".alert");
                                if (alert) alert.innerHTML += ehtml;
                            }
                        }
                    })
                    .catch((e) => {
                        console.error("Error:", e);
                        if (o)
                            o.innerHTML =
                                '<div class="alert alert-danger">An unexpected error occurred. Please try again later.</div>';
                    });
            });
    } catch (err) {
        console.warn("contactForm handler error:", err);
    }
});

document.addEventListener("DOMContentLoaded", () => {
    try {
        const contactForm = document.getElementById("lp_cform");
        const formMessage = document.getElementById("form-message2");

        if (contactForm) {
            contactForm.addEventListener("submit", (e) => {
                e.preventDefault();
                if (formMessage) {
                    formMessage.innerHTML = "";
                    formMessage.className = "mt-3 text-center text-light";
                    formMessage.innerHTML =
                        '<div class="spinner-border text-light" role="status"><span class="visually-hidden">Loading...</span></div> Sending message...';
                }

                const formData = new FormData(contactForm);
                const tokenEl = document.querySelector('input[name="_token"]');
                const csrf = tokenEl ? tokenEl.value : null;

                fetch(
                    "https://thedesignocracy.tech/thedesignocracy/send-email-landing",
                    {
                        method: "POST",
                        body: formData,
                        headers: Object.assign(
                            {
                                "X-Requested-With": "XMLHttpRequest",
                            },
                            csrf ? { "X-CSRF-TOKEN": csrf } : {}
                        ),
                    }
                )
                    .then((response) => {
                        const ct = response.headers.get("content-type") || "";
                        if (ct.indexOf("application/json") !== -1)
                            return response.json();
                        return response.text().then((txt) => {
                            try {
                                return JSON.parse(txt);
                            } catch (err) {
                                return {};
                            }
                        });
                    })
                    .then((data) => {
                        if (!formMessage) return;
                        if (data && data.success) {
                            formMessage.innerHTML = `<div class="alert alert-success">${data.message}</div>`;
                            contactForm.reset();
                            setTimeout(() => {
                                window.location.href =
                                    "https://thedesignocracy.com/thank-you";
                            }, 1500); // optional delay before redirect
                        } else {
                            formMessage.innerHTML = `<div class="alert alert-danger">${
                                (data && data.message) || "An error occurred"
                            }</div>`;
                            if (data && data.errors) {
                                let errorHtml = '<ul class="mt-2 text-start">';
                                Object.values(data.errors).forEach((error) => {
                                    errorHtml += `<li>${error}</li>`;
                                });
                                errorHtml += "</ul>";
                                const alert =
                                    formMessage.querySelector(".alert");
                                if (alert) alert.innerHTML += errorHtml;
                            }
                        }
                    })
                    .catch((error) => {
                        console.error("Error:", error);
                        if (formMessage)
                            formMessage.innerHTML =
                                '<div class="alert alert-danger">An unexpected error occurred. Please try again later.</div>';
                    });
            });
        }
    } catch (err) {
        console.warn("lp_cform handler error:", err);
    }
});

document.addEventListener("DOMContentLoaded", function () {
    try {
        // Add hover class and cursor style if elements exist
        const blogLinks = document.querySelectorAll(".blog_content_sec a");
        if (blogLinks.length > 0) {
            blogLinks.forEach((link) => {
                link.classList.add("hover-target");
                link.setAttribute("data-cursor-style", "hz_cursor_style3");
            });
        }

        // Wrap tables if any exist
        const tables = document.querySelectorAll("table");
        if (tables.length > 0) {
            tables.forEach((table) => {
                const wrapper = document.createElement("div");
                wrapper.className = "table-wrapper";
                table.parentNode.insertBefore(wrapper, table);
                wrapper.appendChild(table);
            });
        }

        // Generate Table of Contents if applicable
        const content = document.getElementById("blog-post-content");
        const toc = document.getElementById("table-of-contents");
        const offset = 100;

        if (content && toc) {
            const headings = content.querySelectorAll("h2, h3");

            headings.forEach((heading, index) => {
                const id = "heading-" + index;
                heading.id = id;

                const link = document.createElement("a");
                link.href = "javascript:void(0);";
                link.textContent = heading.textContent;
                link.className =
                    heading.tagName === "H2"
                        ? "d-block mb-2 f-18"
                        : "d-block mb-1 ps-3 f-16";

                link.addEventListener("click", function () {
                    const yOffset = -offset;
                    const y =
                        heading.getBoundingClientRect().top +
                        window.pageYOffset +
                        yOffset;

                    window.scrollTo({
                        top: y,
                        behavior: "smooth",
                    });
                });

                const li = document.createElement("li");
                li.appendChild(link);
                toc.appendChild(li);
            });
        }

        // Predictive Search
        const searchInput = document.querySelector('input[name="query"]');
        const suggestionsBox = document.getElementById("search-suggestions");

        if (searchInput && suggestionsBox) {
            searchInput.addEventListener("input", function () {
                const query = this.value;

                if (query.length < 2) {
                    suggestionsBox.innerHTML = "";
                    suggestionsBox.style.display = "none";
                    return;
                }

                fetch(`/search-posts?query=${encodeURIComponent(query)}`)
                    .then((response) => response.json())
                    .then((data) => {
                        suggestionsBox.innerHTML = "";
                        if (data && data.length > 0) {
                            data.forEach((post) => {
                                const li = document.createElement("li");
                                li.className =
                                    "list-group-item list-group-item-action";
                                li.innerHTML = post.title;
                                li.onclick = () => {
                                    window.location.href = `/blog/${post.slug}`;
                                };
                                suggestionsBox.appendChild(li);
                            });
                            suggestionsBox.style.display = "block";
                        } else {
                            suggestionsBox.style.display = "none";
                        }
                    })
                    .catch((err) => {
                        console.warn("predictive search error:", err);
                    });
            });
        }
    } catch (err) {
        console.warn("DOMContentLoaded helpers error:", err);
    }
});

// expertise_card cursor behaviour (preserve exactly, guarded)
try {
    document.querySelectorAll(".expertise_card").forEach((card) => {
        const cursor = card.querySelector(".expertise_cursor");

        let isInside = false;
        let followMouse = false;

        // Default position: far away so it's not visible
        try {
            if (cursor && safe.hasLib("gsap")) {
                gsap.set(cursor, { x: -999, y: -999 });
            } else if (cursor) {
                cursor.style.transform = "translate(-999px, -999px)";
            }
        } catch (e) {
            /* ignore */
        }

        const moveCursor = (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            // Follow only when allowed
            if (isInside || followMouse) {
                try {
                    if (cursor && safe.hasLib("gsap")) {
                        gsap.to(cursor, {
                            x: x,
                            y: y,
                            duration: 0.1,
                            ease: "power2.out",
                        });
                    } else if (cursor) {
                        cursor.style.transform = `translate(${x}px, ${y}px)`;
                    }
                } catch (err) {
                    /* ignore */
                }
            }
        };

        const onEnter = (e) => {
            isInside = true;
            followMouse = true;
            moveCursor(e);
        };

        const onLeave = (e) => {
            isInside = false;

            // Keep following until it exits a padded area
            const stopFollowing = (ev) => {
                const rect = card.getBoundingClientRect();
                const x = ev.clientX - rect.left;
                const y = ev.clientY - rect.top;
                const buffer = 150;

                if (
                    x < -buffer ||
                    x > rect.width + buffer ||
                    y < -buffer ||
                    y > rect.height + buffer
                ) {
                    followMouse = false;
                    try {
                        if (cursor && safe.hasLib("gsap")) {
                            gsap.to(cursor, {
                                x: -999,
                                y: -999,
                                duration: 0.3,
                                ease: "power2.in",
                            });
                        } else if (cursor) {
                            cursor.style.transform = "translate(-999px,-999px)";
                        }
                    } catch (err) {
                        /* ignore */
                    }
                    document.removeEventListener("mousemove", moveCursor);
                }
            };

            document.addEventListener("mousemove", moveCursor);
            document.addEventListener("mousemove", stopFollowing, {
                once: true,
            });
        };

        card.addEventListener("mouseenter", onEnter);
        card.addEventListener("mouseleave", onLeave);
        card.addEventListener("mousemove", moveCursor);
    });
} catch (err) {
    console.warn("expertise_card block error:", err);
}

jQuery(document).ready(function ($) {
    try {
        if (window.location.pathname.indexOf("/services") === 0) {
            const target = $(
                ".hz_header_menu .hz_menu_item:nth-child(2) .header-btn-wrapper > a"
            );
            if (target && target.length) {
                target
                    .addClass("hz_pop_btn")
                    .attr("href", "javascript:void(0)")
                    .attr("pop_id", "hz_pop1");
            }
        }
    } catch (err) {
        console.warn("services nav attach error:", err);
    }
});

const videoModal = document.getElementById("videoModal");

if (videoModal) {
    // set src when opening
    videoModal.addEventListener("show.bs.modal", (event) => {
        try {
            const btn = event.relatedTarget;
            const src = btn?.getAttribute("data-bs-whatever");
            const video = videoModal.querySelector(".modal-body video");
            if (video && src) {
                video.src = src; // (optional) add autoplay via ? or video.autoplay = true
                // video.play();              // if you want to force play
            }
        } catch (err) {
            console.warn("videoModal show handler error:", err);
        }
    });

    // stop & reset when closed
    videoModal.addEventListener("hidden.bs.modal", () => {
        try {
            const video = videoModal.querySelector(".modal-body video");
            if (video) {
                video.pause();
                video.currentTime = 0;
                video.removeAttribute("src"); // free network/audio
                video.load(); // fully reset
            }
        } catch (err) {
            console.warn("videoModal hidden handler error:", err);
        }
    });
}

document.addEventListener("DOMContentLoaded", function () {
    const radios = document.querySelectorAll('input[name="radioDefault"]');

    radios.forEach((radio) => {
        radio.addEventListener("change", function () {
            // Remove 'selected' from all cards
            document.querySelectorAll(".hz_radios_card").forEach((card) => {
                card.classList.remove("selected");
            });

            // Add 'selected' to the closest parent card
            this.closest(".hz_radios_card").classList.add("selected");
        });
    });
});

$(".hz-inquiry-form").slick({
    // dots: true,
    infinite: false,
    // fade: true,
    speed: 300,
    slidesToShow: 1,
    // adaptiveHeight: true,
});

document.addEventListener("DOMContentLoaded", function () {
    const radios = document.querySelectorAll(
        'input[type="radio"][name="radioDefault"]'
    );
    const portfolioContainer = document.getElementById("selected_portfolios");

    radios.forEach((radio) => {
        radio.addEventListener("change", function () {
            // ✅ Remove selected class from all cards
            document.querySelectorAll(".hz_radios_card").forEach((card) => {
                card.classList.remove("selected");
            });

            // ✅ Add selected class to current card
            const card = this.closest(".hz_radios_card");
            card.classList.add("selected");

            // ✅ Get JSON URL from hidden input inside this card
            const jsonInput = card.querySelector(".website_port_json");
            const jsonUrl = jsonInput.value;

            console.log("Fetching JSON from:", jsonUrl);

            // ✅ Fetch JSON
            fetch(jsonUrl)
                .then((response) => response.json())
                .then((data) => {
                    console.log("✅ Portfolio JSON Data:", data); // DEBUG LOG

                    // ✅ Clear previous portfolios
                    portfolioContainer.innerHTML = "";

                    // ✅ Safety check
                    if (!data.portfolio || !Array.isArray(data.portfolio)) {
                        console.error("❌ Invalid portfolio JSON structure");
                        return;
                    }

                    // ✅ Render each portfolio item
                    data.portfolio.forEach((item, index) => {
                        const col = document.createElement("div");
                        col.className =
                            "col-xl-3 col-lg-4 col-md-6 col-12 mb-4";

                        col.innerHTML = `
                            <div class="portfolio_card h-100">
                                <a href="${
                                    item.popup_image
                                }" target="_blank" class="d-block">
                                    <img src="${item.thumbnail}" 
                                         alt="${
                                             item.title ?? "Portfolio Image"
                                         }"
                                         class="img-fluid w-100 rounded">
                                </a>
                                <h5 class="mt-2 text-center">${
                                    item.title ?? ""
                                }</h5>
                            </div>
                        `;

                        portfolioContainer.appendChild(col);
                    });
                })
                .catch((error) => {
                    console.error("❌ Error loading JSON:", error);
                });
        });
    });
});
