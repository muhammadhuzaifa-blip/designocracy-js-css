function checkMobile() {
    $(window).width() <= 767 ? ($("body").addClass("hz_mobile_version").removeClass("hz_desktop_version"), $(".hz-desktop-sec").remove()) : ($("body").addClass("hz_desktop_version").removeClass("hz_mobile_version"), $(".hz-mobile-sec").remove())
}

function initOwlCarousels() {
    jQuery("#partners_slider").owlCarousel({
        autoplay: !0
        , rewind: !1
        , margin: 10
        , loop: !0
        , responsiveClass: !0
        , autoHeight: !1
        , autoplayTimeout: 3e3
        , smartSpeed: 800
        , nav: !1
        , touchDrag: !0
        , mouseDrag: !0
        , responsive: {
            0: {
                items: 1
                , stagePadding: 20
                , autoHeight: !1
            }
            , 576: {
                items: 2
                , stagePadding: 30
            }
            , 768: {
                items: 3
            }
            , 992: {
                items: 4
            }
            , 1200: {
                items: 4
            }
            , 1440: {
                items: 5
            }
        }
    }), jQuery("#success_stories_slider").owlCarousel({
        autoplay: !0
        , rewind: !1
        , margin: 10
        , loop: !0
        , responsiveClass: !0
        , autoHeight: !0
        , autoplayTimeout: 3e3
        , smartSpeed: 800
        , nav: !1
        , touchDrag: !0
        , mouseDrag: !0
        , responsive: {
            0: {
                items: 1
                , stagePadding: 20
                , margin: 0
            }
            , 576: {
                items: 1
                , stagePadding: 10
                , margin: 0
            }
            , 768: {
                items: 2
            }
            , 992: {
                items: 2
            }
            , 1200: {
                items: 2
            }
            , 1400: {
                items: 3
            }
        }
    }), jQuery(".industries_slider").owlCarousel({
        autoplay: !0
        , rewind: !1
        , margin: 10
        , loop: !0
        , responsiveClass: !0
        , autoHeight: !0
        , autoplayTimeout: 3e3
        , smartSpeed: 800
        , nav: !1
        , autoWidth: !0
        , touchDrag: !0
        , mouseDrag: !0
        , responsive: {
            0: {
                items: 2
                , stagePadding: 20
                , margin: 0
            }
            , 576: {
                items: 2
            }
            , 768: {
                items: 5
            }
            , 992: {
                items: 6
            }
            , 1200: {
                items: 7
            }
            , 1400: {
                items: 7
            }
        }
    });

    var owl = jQuery("#lp1_slider").owlCarousel({
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
            1400: { items: 1 }
        }
    });

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
            1400: { items: 3 }
        }
    });

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
            1442: { items: 3 }
        }
    });

    // Custom navigation
    jQuery('#lp1 .hz-slider-btn-prev').click(function () {
        owl.trigger('prev.owl.carousel');
    });
    jQuery('#lp1 .hz-slider-btn-next').click(function () {
        owl.trigger('next.owl.carousel');
    });
}

function initSlickSliders() {
    $(".sec2_logo_slider").slick({
        slidesToShow: 10
        , slidesToScroll: 1
        , autoplay: !0
        , arrows: !1
        , dots: !1
        , autoplaySpeed: 0
        , speed: 1e3
        , pauseOnHover: !1
        , cssEase: "linear"
        , responsive: [{
            breakpoint: 1400
            , settings: {
                slidesToShow: 7
            }
        }, {
            breakpoint: 992
            , settings: {
                slidesToShow: 3
            }
        }]
    }), $(".sec4_tags_slider").slick({
        slidesToShow: 10
        , slidesToScroll: 1
        , autoplay: !0
        , arrows: !1
        , dots: !1
        , autoplaySpeed: 0
        , speed: 8e3
        , pauseOnHover: !1
        , cssEase: "linear"
        , variableWidth: !0
    })
}

// Disable browser's scroll restoration behavior
if ("scrollRestoration" in history) {
    history.scrollRestoration = "manual";
}

// Remove loader class after 1 second when page loads
window.addEventListener("load", function () {
    const loader = document.querySelector(".custom-cursor");
    if (loader) {
        setTimeout(() => {
            loader.classList.remove("hz-loader");
        }, 1000);
    }
});

// Add/remove class from header based on scroll position
$(window).scroll(function () {
    if ($(this).scrollTop() > $(window).height()) {
        $(".homepage #hz_header").addClass("newClass");
    } else {
        $(".homepage #hz_header").removeClass("newClass");
    }
});

$(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
        $('#hz_header:not(.homepage #hz_header)').addClass('newClass');
    } else {
        $('#hz_header:not(.homepage #hz_header)').removeClass('newClass');
    }
});

// Scroll to top when page is about to unload
$(window).on("beforeunload", function () {
    $(window).scrollTop(0);
});

// Document ready function
$(document).ready(function () {
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
            $(this).find(".partner_slide, .success_stories_slide, .industries_slide")
                .css("transform", "scale(0.95)");
        })
        .on("mouseup mouseleave", function () {
            $(this).find(".partner_slide, .success_stories_slide, .industries_slide")
                .css("transform", "scale(1)");
        });

    // Mobile menu toggle
    $(".mobile-menu-main-wrap .hz-hamburger label svg").click(function () {
        $(".hz-full-screen-menu").toggleClass("hz_closed hz_opened");
    });

    // Close mobile menu when item is clicked
    $(".hz_mobile_menu .hz_header_menu .hz_menu_item").click(function () {
        $(".hz-full-screen-menu").removeClass("hz_opened").addClass("hz_closed");
        $('.hamburger input[type="checkbox"]').prop("checked", false);
    });

    // Popup video functionality
    $(".hz_pop_btn").on("click", function () {
        const popupId = $(this).attr("pop_id");
        const popup = $("#" + popupId);
        popup.addClass("active");
        const video = popup.find("video").get(0);
        if (video) {
            video.currentTime = 0;
            video.play();
        }
    });

    // Close popup
    $(".hz_close_btn").on("click", function () {
        const popup = $(this).closest(".hz_pop");
        popup.removeClass("active");
        const video = popup.find("video").get(0);
        if (video) {
            video.pause();
        }
    });

    // Close popup when clicking outside content
    $(".hz_pop").on("click", function (e) {
        if ($(e.target).is(".hz_pop")) {
            $(this).removeClass("active");
            const video = $(this).find("video").get(0);
            if (video) {
                video.pause();
            }
        }
    });
});

// Window onload function
window.onload = () => {
    setTimeout(() => {
        // Scroll to top on load
        window.scrollTo(0, 0);

        const isMobile = $("body").hasClass("hz_mobile_version");
        const isLowPerformance = navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4;

        if (!isMobile) {
            // Initialize smooth scrolling with Lenis
            const lenis = new Lenis({
                lerp: isLowPerformance ? 0.15 : 0.03,
                smoothWheel: true,
                smoothTouch: true,
                infinite: false
            });

            setTimeout(() => {
                lenis.scrollTo(0, { immediate: true });
            }, 50);

            // Connect Lenis with ScrollTrigger
            lenis.on("scroll", ScrollTrigger.update);
            gsap.ticker.add((time) => {
                lenis.raf(time * 1000);
            });

            // Smooth scroll for anchor links
            document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
                anchor.addEventListener("click", function (e) {
                    const targetId = this.getAttribute("href");
                    const target = document.querySelector(targetId);
                    if (target) {
                        e.preventDefault();
                        lenis.scrollTo(target, {
                            offset: 0,
                            duration: 1.5,
                            easing: (t) => 1 - Math.pow(1 - t, 3)
                        });
                    }
                });
            });

            // GSAP performance settings
            gsap.ticker.fps(60);
            gsap.ticker.lagSmoothing(0);
            ScrollTrigger.normalizeScroll(true);
        }

        // Register GSAP plugins
        gsap.registerPlugin(ScrollTrigger);

        if (isMobile) {
            // Mobile animations
            const heroSvg = document.querySelector(".hz_mobile_version .hz-hero-title > svg");
            const isSmallScreen = window.innerWidth < 410;

            // Hero section timeline
            const heroTimeline = gsap.timeline({
                scrollTrigger: {
                    trigger: ".hz_mobile_version #hero",
                    start: "top top",
                    end: "+=100%",
                    scrub: 5,
                    pin: true
                }
            });

            const svgXPos = window.innerWidth < 410 ? "-38vw" : isSmallScreen ? "-39.5vw" : -145;

            heroTimeline.to(heroSvg, {
                width: isSmallScreen ? 120 : 152,
                x: svgXPos,
                top: isSmallScreen ? 21 : 39,
                ease: "power2.inOut",
                duration: 3
            });

            heroTimeline.to(".hz_mobile_version .hz-hero-content", {
                y: "-100vh",
                ease: "power2.inOut",
                duration: 4,
                delay: 1
            }, "<");

            heroTimeline.to(".hz_mobile_version .hz_port_slides", {
                scale: 1,
                top: "55%",
                duration: 3,
                ease: "power2.out",
                delay: 1
            }, "<");

            heroTimeline.to(".hz_mobile_version .header_logo_text > svg", {
                opacity: 1,
                duration: 1,
                ease: "power2.out",
                delay: 1
            });

            heroTimeline.to(".hz_mobile_version .hz-hero-title > svg", {
                opacity: 0,
                duration: 0.1,
                ease: "power2.out",
                delay: 0.5
            }, "<");

            heroTimeline.to(".hz_mobile_version .hz_port_slides .hz_port_slide.hz_port_slide2", {
                opacity: 1,
                y: "-95%",
                duration: 3,
                ease: "power2.out"
            });

            heroTimeline.to(".hz_mobile_version .hz_port_slides .hz_port_slide.hz_port_slide3", {
                opacity: 1,
                y: "-90%",
                duration: 3,
                ease: "power2.out"
            });

            // Impact cards animation
            const impactTimeline = gsap.timeline({
                scrollTrigger: {
                    trigger: ".hz_mobile_version #sec5",
                    start: "top 40%",
                    end: "+=80%",
                    scrub: 0
                }
            });

            for (let i = 1; i <= 6; i++) {
                impactTimeline.to(`.hz_mobile_version .impact_card.impact_card${i}`, {
                    x: "0%",
                    y: "0%",
                    rotate: "0deg",
                    delay: i > 1 ? 0.3 : 0
                }, "<");
            }

            // Testimonials section animation
            gsap.timeline({
                scrollTrigger: {
                    trigger: ".hz_mobile_version #sec9",
                    start: "top top",
                    end: "bottom top",
                    scrub: 3,
                    pin: true
                }
            }).to(".hz_mobile_version #testis_wrap>.hz_testi_row", {
                x: "-685%",
                ease: "none"
            });


            const idea_cards_timeline_mobile = gsap.timeline({
                scrollTrigger: {
                    trigger: ".hz_mobile_version #web_app_4",
                    start: "top 60%",
                    end: "bottom 20%",
                    scrub: 0,
                    pin: false
                }
            });

            idea_cards_timeline_mobile.to(".hz_mobile_version .idea_card.idea_card1", {
                y: "-30%",
                x: "0%",
                ease: "power2.inOut"
            });

            idea_cards_timeline_mobile.to(".hz_mobile_version .idea_card.idea_card3", {
                y: "-30%",
                x: "0%",
                ease: "power2.inOut"
            }, "<");

            idea_cards_timeline_mobile.to(".hz_mobile_version .idea_card.idea_card2", {
                y: "-30%",
                x: "0%",
                ease: "power2.inOut"
            }, "<");


            const industry_inner_box4 = gsap.timeline({
                scrollTrigger: {
                    trigger: "#industry_inner4",
                    start: "top 60%",
                    end: "bottom 20%",
                    scrub: 0,
                    pin: false
                }
            });

            industry_inner_box4.to("#industry_inner_box4", {
                y: "-30%",
                x: "0%",
                ease: "power2.inOut"
            });

        } else {
            // Desktop animations
            const desktopHeroSvg = document.querySelector(".hz_desktop_version .hz-hero-title > svg");

            // Hero section timeline
            const desktopHeroTimeline = gsap.timeline({
                scrollTrigger: {
                    trigger: ".hz_desktop_version #hero_wraps",
                    start: "top top",
                    end: "+=120%",
                    scrub: 3,
                    pin: true,
                    anticipatePin: 1
                }
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

            desktopHeroTimeline.to(desktopHeroSvg, {
                width: 152,
                x: svgXPosition,
                top: 40,
                ease: "power2.inOut",
                duration: 3
            });

            desktopHeroTimeline.to(".hz_desktop_version .hz-hero-content", {
                y: "-100vh",
                ease: "power2.inOut",
                duration: 3,
                delay: 0.5
            }, "<");

            desktopHeroTimeline.to(".hz_desktop_version #hero .hz-row.hz-row2", {
                opacity: 0,
                ease: "power2.inOut",
                duration: 1
            }, "<");

            desktopHeroTimeline.to(".hz_desktop_version .hz_port_slides", {
                scale: 1,
                top: "53%",
                duration: 3,
                ease: "power2.out",
                delay: 1
            }, "<");

            desktopHeroTimeline.to(".hz_desktop_version .header_logo_text > svg", {
                opacity: 1,
                duration: 1,
                ease: "power2.out",
                delay: 1
            });

            desktopHeroTimeline.to(".hz_desktop_version .hz-hero-title > svg", {
                opacity: 0,
                duration: 0.1,
                ease: "power2.out",
                delay: 0.5
            }, "<");

            desktopHeroTimeline.to(".hz_desktop_version .hz_port_slides .hz_port_slide.hz_port_slide2", {
                opacity: 1,
                y: "-95%",
                duration: 3,
                ease: "power2.out",
                delay: 0.5
            });

            desktopHeroTimeline.to(".hz_desktop_version .hz_port_slides .hz_port_slide.hz_port_slide3", {
                opacity: 1,
                y: "-90%",
                duration: 3,
                delay: 0.5,
                ease: "power2.out"
            });

            // Impact cards animation
            const desktopImpactTimeline = gsap.timeline({
                scrollTrigger: {
                    trigger: ".hz_desktop_version #sec5",
                    start: "top 50%",
                    end: "+=30%",
                    scrub: isLowPerformance ? 1 : 2,
                    pin: false,
                    anticipatePin: 1
                }
            });

            const duration = 0.5;
            for (let i = 1; i <= 6; i++) {
                desktopImpactTimeline.to(`.hz_desktop_version .impact_card.impact_card${i}`, {
                    x: "0%",
                    y: "0%",
                    rotate: "0deg",
                    delay: 0.3,
                    duration: duration,
                    ease: "power2.out"
                }, i === 1 ? "<" : "<+=0.1");
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
                        anticipatePin: 1
                    }
                }).to("#testis_wrap>.hz_testi_row", {
                    x: xPosition
                });
            }

            ScrollTrigger.matchMedia({
                "(min-width: 1400px)": () => setupTestimonialsAnimation("-100%"),
                "(min-width: 1200px) and (max-width: 1399px)": () => setupTestimonialsAnimation("-150%"),
                "(min-width: 992px) and (max-width: 1199px)": () => setupTestimonialsAnimation("-200%"),
                "(min-width: 768px) and (max-width: 991px)": () => setupTestimonialsAnimation("-230%"),
                "(min-width: 577px) and (max-width: 767px)": () => setupTestimonialsAnimation("-685%"),
                "(max-width: 576px)": () => setupTestimonialsAnimation("-685%")
            });


            const idea_cards_timeline = gsap.timeline({
                scrollTrigger: {
                    trigger: ".hz_desktop_version #web_app_4",
                    start: "top 60%",
                    end: "bottom 20%",
                    scrub: 0,
                    pin: false
                }
            });

            idea_cards_timeline.to(".hz_desktop_version .idea_card.idea_card1", {
                y: "-30%",
                x: "0%",
                ease: "power2.inOut"
            });

            idea_cards_timeline.to(".hz_desktop_version .idea_card.idea_card3", {
                y: "-30%",
                x: "0%",
                ease: "power2.inOut"
            }, "<");

            idea_cards_timeline.to(".hz_desktop_version .idea_card.idea_card2", {
                y: "-30%",
                x: "0%",
                ease: "power2.inOut"
            }, "<");


            const industry_inner_box4 = gsap.timeline({
                scrollTrigger: {
                    trigger: "#industry_inner4",
                    start: "top 60%",
                    end: "bottom 20%",
                    scrub: 0,
                    pin: false
                }
            });

            industry_inner_box4.to("#industry_inner_box4", {
                y: "-30%",
                x: "0%",
                ease: "power2.inOut"
            });
        }
    }, 500);
};


document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector("#hz_header");
    const firstSection = document.querySelector(".service-2");

    if (header && firstSection) {
        let additionalPadding = 0;

        const headerHeight = header.offsetHeight + additionalPadding;
        firstSection.style.top = `${headerHeight}px`;
    }
});



document.addEventListener("DOMContentLoaded", (() => {
    const e = document.getElementById("contactForm"),
        o = document.getElementById("form-message");

    e && e.addEventListener("submit", (t => {
        t.preventDefault();
        o.innerHTML = "";
        o.className = "mt-3 text-center text-light";
        o.innerHTML = '<div class="spinner-border text-light" role="status"><span class="visually-hidden">Loading...</span></div> Sending message...';

        const s = new FormData(e);

        fetch("https://thedesignocracy.tech/thedesignocracy/send-email", {
            method: "POST",
            body: s,
            headers: {
                "X-Requested-With": "XMLHttpRequest",
                "X-CSRF-TOKEN": document.querySelector('input[name="_token"]').value
            }
        })
            .then((e => e.json()))
            .then((t => {
                if (t.success) {
                    o.innerHTML = `<div class="alert alert-success">${t.message}</div>`;
                    e.reset();
                    setTimeout(() => {
                        window.location.href = "https://thedesignocracy.com/thank-you";
                    }, 1500); // optional delay before redirect
                } else {
                    o.innerHTML = `<div class="alert alert-danger">${t.message}</div>`;
                    if (t.errors) {
                        let e = '<ul class="mt-2 text-start">';
                        Object.values(t.errors).forEach((o => {
                            e += `<li>${o}</li>`;
                        }));
                        e += "</ul>";
                        o.querySelector(".alert").innerHTML += e;
                    }
                }
            }))
            .catch((e => {
                console.error("Error:", e);
                o.innerHTML = '<div class="alert alert-danger">An unexpected error occurred. Please try again later.</div>';
            }));
    }));
}));


document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.getElementById("lp_cform");
    const formMessage = document.getElementById("form-message2");

    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault();
            formMessage.innerHTML = "";
            formMessage.className = "mt-3 text-center text-light";
            formMessage.innerHTML =
                '<div class="spinner-border text-light" role="status"><span class="visually-hidden">Loading...</span></div> Sending message...';

            const formData = new FormData(contactForm);

            fetch("https://thedesignocracy.tech/thedesignocracy/send-email-landing", {
                method: "POST",
                body: formData,
                headers: {
                    "X-Requested-With": "XMLHttpRequest",
                    "X-CSRF-TOKEN": document.querySelector(
                        'input[name="_token"]'
                    ).value,
                },
            })
                .then((response) => response.json())
                .then((data) => {
                    if (data.success) {
                        formMessage.innerHTML = `<div class="alert alert-success">${data.message}</div>`;
                        contactForm.reset();
                        setTimeout(() => {
                            window.location.href = "https://thedesignocracy.com/thank-you";
                        }, 1500); // optional delay before redirect
                    } else {
                        formMessage.innerHTML = `<div class="alert alert-danger">${data.message}</div>`;
                        if (data.errors) {
                            let errorHtml = '<ul class="mt-2 text-start">';
                            Object.values(data.errors).forEach((error) => {
                                errorHtml += `<li>${error}</li>`;
                            });
                            errorHtml += "</ul>";
                            formMessage.querySelector(".alert").innerHTML +=
                                errorHtml;
                        }
                    }
                })
                .catch((error) => {
                    console.error("Error:", error);
                    formMessage.innerHTML =
                        '<div class="alert alert-danger">An unexpected error occurred. Please try again later.</div>';
                });
        });
    }
});


document.addEventListener("DOMContentLoaded", function () {

    // Add hover class and cursor style if elements exist
    const blogLinks = document.querySelectorAll('.blog_content_sec a');
    if (blogLinks.length > 0) {
        blogLinks.forEach(link => {
            link.classList.add('hover-target');
            link.setAttribute('data-cursor-style', 'hz_cursor_style3');
        });
    }

    // Wrap tables if any exist
    const tables = document.querySelectorAll('table');
    if (tables.length > 0) {
        tables.forEach(table => {
            const wrapper = document.createElement('div');
            wrapper.className = 'table-wrapper';
            table.parentNode.insertBefore(wrapper, table);
            wrapper.appendChild(table);
        });
    }

    // Generate Table of Contents if applicable
    const content = document.getElementById('blog-post-content');
    const toc = document.getElementById('table-of-contents');
    const offset = 100;

    if (content && toc) {
        const headings = content.querySelectorAll('h2, h3');

        headings.forEach((heading, index) => {
            const id = 'heading-' + index;
            heading.id = id;

            const link = document.createElement('a');
            link.href = 'javascript:void(0);';
            link.textContent = heading.textContent;
            link.className = heading.tagName === 'H2' ? 'd-block mb-2 f-18' : 'd-block mb-1 ps-3 f-16';

            link.addEventListener('click', function () {
                const yOffset = -offset;
                const y = heading.getBoundingClientRect().top + window.pageYOffset + yOffset;

                window.scrollTo({
                    top: y,
                    behavior: 'smooth'
                });
            });

            const li = document.createElement('li');
            li.appendChild(link);
            toc.appendChild(li);
        });
    }

    // Predictive Search
    const searchInput = document.querySelector('input[name="query"]');
    const suggestionsBox = document.getElementById('search-suggestions');

    if (searchInput && suggestionsBox) {
        searchInput.addEventListener('input', function () {
            const query = this.value;

            if (query.length < 2) {
                suggestionsBox.innerHTML = '';
                suggestionsBox.style.display = 'none';
                return;
            }

            fetch(`/search-posts?query=${encodeURIComponent(query)}`)
                .then(response => response.json())
                .then(data => {
                    suggestionsBox.innerHTML = '';
                    if (data.length > 0) {
                        data.forEach(post => {
                            const li = document.createElement('li');
                            li.className = 'list-group-item list-group-item-action';
                            li.innerHTML = post.title;
                            li.onclick = () => {
                                window.location.href = `/blog/${post.slug}`;
                            };
                            suggestionsBox.appendChild(li);
                        });
                        suggestionsBox.style.display = 'block';
                    } else {
                        suggestionsBox.style.display = 'none';
                    }
                });
        });
    }

});





document.querySelectorAll('.expertise_card').forEach(card => {
    const cursor = card.querySelector('.expertise_cursor');

    let isInside = false;
    let followMouse = false;

    // Default position: far away so it's not visible
    gsap.set(cursor, {
        x: -999,
        y: -999
    });

    const moveCursor = (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        // Follow only when allowed
        if (isInside || followMouse) {
            gsap.to(cursor, {
                x: x,
                y: y,
                duration: 0.1,
                ease: "power2.out"
            });
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
        const stopFollowing = (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const buffer = 150;

            if (
                x < -buffer || x > rect.width + buffer ||
                y < -buffer || y > rect.height + buffer
            ) {
                followMouse = false;
                gsap.to(cursor, {
                    x: -999,
                    y: -999,
                    duration: 0.3,
                    ease: 'power2.in'
                });
                document.removeEventListener('mousemove', moveCursor);
            }
        };

        document.addEventListener('mousemove', moveCursor);
        document.addEventListener('mousemove', stopFollowing, { once: true });
    };

    card.addEventListener('mouseenter', onEnter);
    card.addEventListener('mouseleave', onLeave);
    card.addEventListener('mousemove', moveCursor);
});




jQuery(document).ready(function ($) {
    if (window.location.pathname.indexOf('/services') === 0) {
        const target = $(".hz_header_menu .hz_menu_item:nth-child(2) .header-btn-wrapper > a");
        target.addClass("hz_pop_btn")
            .attr("href", "javascript:void(0)")
            .attr("pop_id", "hz_pop1");
    }
});



const videoModal = document.getElementById('videoModal');

if (videoModal) {
  // set src when opening
  videoModal.addEventListener('show.bs.modal', (event) => {
    const btn = event.relatedTarget;
    const src = btn?.getAttribute('data-bs-whatever');
    const video = videoModal.querySelector('.modal-body video');
    if (video && src) {
      video.src = src;              // (optional) add autoplay via ? or video.autoplay = true
      // video.play();              // if you want to force play
    }
  });

  // stop & reset when closed
  videoModal.addEventListener('hidden.bs.modal', () => {
    const video = videoModal.querySelector('.modal-body video');
    if (video) {
      video.pause();
      video.currentTime = 0;
      video.removeAttribute('src');  // free network/audio
      video.load();                  // fully reset
    }
  });
}