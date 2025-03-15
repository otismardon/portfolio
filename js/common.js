class Cursor {
    constructor() {
        
        this.$cursor = document.querySelector("#js-cmn-cursor");
        this.$cursor.classList.add("is-active");
        this.$cursorInner = document.querySelector("#js-cmn-cursor__inner");
        this.$a = document.querySelectorAll("a, .cmn-cursor--target");
        this.cursorPositionX = 0;
        this.cursorPositionY = 0;
        this.oldCursorPositionX = 0;
        this.oldCursorPositionY = 0;

        for (let e = 0; e < this.$a.length; e++) {
            this.$a[e].addEventListener("mouseenter", () => {
                gsap.to(this.$cursorInner, {
                    duration: 0.6,
                    ease: "power3.out",
                    scale: 2
                });
            });
            this.$a[e].addEventListener("mouseleave", () => {
                gsap.to(this.$cursorInner, {
                    duration: 0.6,
                    ease: "power3.out",
                    scale: 1
                });
            });
        }

        window.addEventListener("mousemove", e => {
            this.cursorPositionX = e.clientX;
            this.cursorPositionY = e.clientY;
        }, {
            passive: true
        });

        const animateCursor = () => {
            const deltaX = this.oldCursorPositionX - this.cursorPositionX;
            const deltaY = this.oldCursorPositionY - this.cursorPositionY;
            const distance = Math.min(20, Math.sqrt(deltaX * deltaX + deltaY * deltaY)) / 10;
            const rotation = 180 * Math.atan2(deltaY, deltaX) / Math.PI;

            gsap.set(this.$cursor, {
                x: this.cursorPositionX,
                y: this.cursorPositionY,
                scaleX: 1 + distance,
                rotation: rotation
            });

            this.oldCursorPositionX = this.cursorPositionX;
            this.oldCursorPositionY = this.cursorPositionY;
            requestAnimationFrame(animateCursor);
        };

        animateCursor();
    }
}

// Initialize the cursor
new Cursor();
