const cursor = document.querySelector(".custom-cursor")
    , cursorText = document.querySelector(".cursor-text")
    , hoverTargets = document.querySelectorAll(".hover-target");
document.addEventListener("mousemove", (e => {
    gsap.to(cursor, {
        duration: .2
        , x: e.clientX
        , y: e.clientY
        , ease: "power2.out"
    })
})), hoverTargets.forEach((e => {
    e.addEventListener("mouseenter", (() => {
        const t = e.getAttribute("data-cursor-text")
            , r = e.getAttribute("data-cursor-style");
        cursorText.textContent = t, cursor.classList.add(r)
    })), e.addEventListener("mouseleave", (() => {
        cursorText.textContent = "", cursor.className = "custom-cursor"
    }))
}));