! function(e) {
    var t = {};

    function i(o) {
        if (t[o]) return t[o].exports;
        var s = t[o] = {
            i: o,
            l: !1,
            exports: {}
        };
        return e[o].call(s.exports, s, s.exports, i), s.l = !0, s.exports
    }
    i.m = e, i.c = t, i.d = function(e, t, o) {
        i.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: o
        })
    }, i.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, i.t = function(e, t) {
        if (1 & t && (e = i(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var o = Object.create(null);
        if (i.r(o), Object.defineProperty(o, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var s in e) i.d(o, s, function(t) {
                return e[t]
            }.bind(null, s));
        return o
    }, i.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return i.d(t, "a", t), t
    }, i.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, i.p = "/", i(i.s = 2)
}({
    2: function(e, t, i) {
        e.exports = i("M0ug")
    },
    M0ug: function(e, t, i) {
        "use strict";
        i.r(t), i.d(t, "default", (function() {
            return p
        }));
        class o {
            constructor() {
                this.$animation = document.querySelectorAll("[data-anime-bounce]");
                for (let e = 0; e < this.$animation.length; e++) {
                    const t = this.$animation[e].hasAttribute("data-anime-trigger") ? document.querySelector(this.$animation[e].getAttribute("data-anime-trigger")) : this.$animation[e];
                    gsap.set(this.$animation[e], {
                        scale: 0
                    }), gsap.fromTo(this.$animation[e], {
                        scale: 0
                    }, {
                        scale: 1,
                        duration: parseFloat(this.$animation[e].getAttribute("data-anime-duration") || .8),
                        delay: parseFloat(this.$animation[e].getAttribute("data-anime-delay") || 0),
                        ease: "elastic.out(1, 0.4)",
                        scrollTrigger: {
                            trigger: t,
                            start: "10% bottom",
                            once: !0
                        }
                    })
                }
            }
        }
        class s {
            constructor() {
                this.$animation = document.querySelectorAll("[data-anime-mask]");
                for (let e = 0; e < this.$animation.length; e++) {
                    const t = this.$animation[e].hasAttribute("data-anime-trigger") ? document.querySelector(this.$animation[e].getAttribute("data-anime-trigger")) : this.$animation[e];
                    gsap.set(this.$animation, {
                        clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
                        yPercent: 101
                    }), gsap.fromTo(this.$animation[e], {
                        clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
                        yPercent: 101
                    }, {
                        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                        yPercent: 0,
                        duration: parseFloat(this.$animation[e].getAttribute("data-anime-duration") || 1.2),
                        delay: parseFloat(this.$animation[e].getAttribute("data-anime-delay") || 0),
                        ease: "power3.inOut",
                        scrollTrigger: {
                            trigger: t,
                            start: "10% bottom",
                            once: !0
                        }
                    })
                }
            }
        }
        class n {
            constructor() {
                this.$animation = document.querySelectorAll("[data-anime-fade]");
                for (let e = 0; e < this.$animation.length; e++) {
                    const t = this.$animation[e].hasAttribute("data-anime-trigger") ? document.querySelector(this.$animation[e].getAttribute("data-anime-trigger")) : this.$animation[e];
                    gsap.set(this.$animation, {
                        opacity: 0
                    }), gsap.fromTo(this.$animation[e], {
                        opacity: 0
                    }, {
                        opacity: 1,
                        duration: parseFloat(this.$animation[e].getAttribute("data-anime-duration") || 1),
                        delay: parseFloat(this.$animation[e].getAttribute("data-anime-delay") || 0),
                        ease: parseFloat(this.$animation[e].getAttribute("data-anime-ease") || "none"),
                        scrollTrigger: {
                            trigger: t,
                            start: "10% bottom",
                            once: !0
                        }
                    })
                }
            }
        }
        class a {
            constructor() {
                if (CheckDevice.isTouch()) return;
                this.$cursor = document.querySelector("#js-cmn-cursor"), this.$cursor.classList.add("is-active"), this.$cursorInner = document.querySelector("#js-cmn-cursor__inner"), this.$a = document.querySelectorAll("a, .cmn-cursor--target"), this.cursorPositionX = 0, this.cursorPositionY = 0, this.oldCursorPositionX = 0, this.oldCursorPositionY = 0;
                for (let e = 0; e < this.$a.length; e++) this.$a[e].addEventListener("mouseenter", () => {
                    gsap.to(this.$cursorInner, {
                        duration: .6,
                        ease: "power3.out",
                        scale: 2
                    })
                }), this.$a[e].addEventListener("mouseleave", () => {
                    gsap.to(this.$cursorInner, {
                        duration: .6,
                        ease: "power3.out",
                        scale: 1
                    })
                });
                window.addEventListener("mousemove", e => {
                    this.cursorPositionX = e.clientX, this.cursorPositionY = e.clientY
                }, {
                    passive: !0
                });
                const e = () => {
                    const t = this.oldCursorPositionX - this.cursorPositionX,
                        i = this.oldCursorPositionY - this.cursorPositionY,
                        o = Math.min(20, Math.sqrt(t * t + i * i)) / 10,
                        s = 180 * Math.atan2(i, t) / Math.PI;
                    gsap.set(this.$cursor, {
                        x: this.cursorPositionX,
                        y: this.cursorPositionY,
                        scaleX: 1 + o,
                        rotation: s
                    }), this.oldCursorPositionX = this.cursorPositionX, this.oldCursorPositionY = this.cursorPositionY, requestAnimationFrame(e)
                };
                e()
            }
        }
        class r {
            constructor() {
                this.$loading = document.querySelector("#js-cmn-gallery-modal__loading"), this.$circle = this.$loading.querySelectorAll(".cmn-gallery-modal__loading-bar-circle"), this.tween = gsap.fromTo(this.$circle, {
                    scale: 1,
                    transformOrigin: "center center"
                }, {
                    duration: 1.2,
                    ease: "power1.out",
                    scale: .4,
                    stagger: {
                        each: .1,
                        from: "end",
                        repeat: -1
                    }
                })
            }
            show() {
                this.tween.play(), gsap.to(this.$loading, {
                    duration: .8,
                    ease: "power3.inOut",
                    opacity: 1
                })
            }
            hide() {
                this.tween.pause(), gsap.to(this.$loading, {
                    duration: .8,
                    ease: "power3.inOut",
                    opacity: 0
                })
            }
        }
        class l {
            constructor() {
                if (this.$modal = document.querySelector("#js-cmn-gallery-modal"), null !== this.$modal) {
                    this.$modalItem = document.querySelectorAll(".cmn-gallery-modal__item"), this.$modalOpen = document.querySelectorAll(".cmn-gallery-modal__open"), this.$modalClose = document.querySelector("#js-cmn-gallery-modal__close"), this.$video = document.querySelectorAll(".cmn-gallery-modal__item-video"), this.$videoInner = document.querySelectorAll(".cmn-gallery-modal__item-video-inner"), this.$videoInnerBody = document.querySelectorAll(".cmn-gallery-modal__item-video-inner-body"), this.$videoBtn = document.querySelectorAll(".cmn-gallery-modal__item-video-btn"), this.$videoControl = document.querySelectorAll(".cmn-gallery-modal__item-video-control"), this.$circle = document.querySelector("#js-cmn-gallery-modal__circle"), this.$itemCircle = document.querySelectorAll(".cmn-gallery-modal__item-circle"), this.$itemTitle = document.querySelectorAll(".cmn-gallery-modal__item-content-title"), this.$itemDesc = document.querySelectorAll(".cmn-gallery-modal__item-content-desc"), this.$itemInfoList = document.querySelectorAll(".cmn-gallery-modal__item-content-info-list-wrapper"), this.$body = document.querySelector("body"), this.isHome = this.$body.classList.contains("home"), this.currentScrollY = 0, this.videoUrl = [], this.player = [], this.isInitVimeo = [], this.isPlay = [], this.isModalOpen = [], this.currentModalNum = 0, this.clientX = 0, this.clientY = 0, this.loadingIcon = new r, this.garallySection = document.querySelector(".index-section--gallery"), window.addEventListener("mousemove", e => {
                        this.clientX = e.clientX, this.clientY = e.clientY
                    }, {
                        passive: !0
                    }), window.addEventListener("touchstart", e => {
                        this.clientX = e.changedTouches[0].pageX, this.clientY = e.changedTouches[0].pageY
                    }, {
                        passive: !0
                    });
                    for (let e = 0; e < this.$modalOpen.length; e++) this.isInitVimeo[e] = !1, this.isPlay[e] = !1, this.isModalOpen[e] = !1, this.videoUrl[e] = this.$videoInnerBody[e].getAttribute("data-url"), gsap.set(this.$itemTitle[e], {
                        clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
                        yPercent: 101
                    }), gsap.set(this.$itemDesc[e], {
                        clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
                        yPercent: 101
                    }), gsap.set(this.$itemInfoList[e], {
                        clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
                        yPercent: 101
                    });
                    for (let e = 0; e < this.$modalOpen.length; e++) this.$modalOpen[e].addEventListener("click", t => {
                        t.preventDefault(), this.open(e)
                    }, {
                        passive: !1
                    });
                    this.$modalClose.addEventListener("click", e => {
                        e.preventDefault(), this.close(this.currentModalNum)
                    }, {
                        passive: !1
                    })
                }
            }
            open(e) {
                this.currentModalNum = e, this.isModalOpen[e] = !0, gsap.to({}, {
                    duration: 1
                }).eventCallback("onComplete", () => {
                    this.isHome || (this.currentScrollY = window.scrollY, this.$body.style.position = "fixed", this.$body.style.left = "0", this.$body.style.top = "0", this.$body.style.width = "100%")
                }), gsap.set(this.$modal, {
                    display: "block"
                }), gsap.set(this.$modalItem[e], {
                    pointerEvents: "auto"
                }), gsap.fromTo(this.$circle, {
                    x: this.clientX,
                    y: this.clientY,
                    scale: 0
                }, {
                    duration: 1,
                    delay: 0,
                    ease: "power3.inOut",
                    x: this.clientX,
                    y: this.clientY,
                    scale: 1
                }), this.isInitVimeo[e] ? (this.player[e].setCurrentTime(0), this.showContent(e, .8)) : (this.isInitVimeo[e] = !0, this.loadingIcon.show(), this.player[e] = new VimeoPlayer(this.$videoInnerBody[e], {
                    url: this.videoUrl[e],
                    autoplay: !1,
                    playsinline: !0,
                    muted: !0,
                    loop: !0,
                    byline: !1,
                    portrait: !1,
                    title: !1,
                    controls: !1,
                    color: "00ADEF"
                }), this.player[e].on("loaded", () => {
                    this.showContent(e, .4), this.loadingIcon.hide(), this.$videoControl[e].addEventListener("click", t => {
                        t.preventDefault(), this.isModalOpen[e] && (this.isPlay[e] ? (this.isPlay[e] = !1, this.player[e].pause(), gsap.to(this.$videoBtn[e], {
                            duration: .8,
                            ease: "power3.inOut",
                            opacity: 1
                        })) : (this.isPlay[e] = !0, this.player[e].setVolume(1), this.player[e].play(), gsap.to(this.$videoBtn[e], {
                            duration: .8,
                            ease: "power3.inOut",
                            opacity: 0
                        })))
                    })
                }))
            }
            showContent(e, t) {
                gsap.set(this.$modalClose, {
                    opacity: 1
                }), gsap.fromTo(this.$modalClose, {
                    scale: 0
                }, {
                    duration: .8,
                    delay: t + .3,
                    ease: "elastic.out(1, 0.4)",
                    scale: 1
                }), gsap.set(this.$videoInner[e], {
                    opacity: 1
                }), gsap.fromTo(this.$videoInner[e], {
                    scale: 0
                }, {
                    duration: .8,
                    delay: t,
                    ease: "elastic.out(1, 0.4)",
                    scale: 1
                }), gsap.set(this.$videoBtn[e], {
                    opacity: 1
                }), gsap.fromTo(this.$videoBtn[e], {
                    scale: 0
                }, {
                    duration: .8,
                    delay: t + .3,
                    ease: "elastic.out(1, 0.4)",
                    scale: 1
                }), gsap.set(this.$itemCircle[e], {
                    display: "block"
                }), gsap.fromTo(this.$itemCircle[e], {
                    scale: 0
                }, {
                    duration: 1,
                    delay: t + .3,
                    ease: "power3.inOut",
                    scale: 1
                }), gsap.to(this.$itemTitle[e], {
                    duration: 1.2,
                    delay: t + .3,
                    ease: "power3.inOut",
                    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                    yPercent: 0
                }), gsap.to(this.$itemDesc[e], {
                    duration: 1.2,
                    delay: t + .3,
                    ease: "power3.inOut",
                    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                    yPercent: 0
                }), gsap.to(this.$itemInfoList[e], {
                    duration: 1.2,
                    delay: t + .3,
                    ease: "power3.inOut",
                    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                    yPercent: 0
                })
            }
            close(e) {
                this.isHome || (this.$body.style.position = "", this.$body.style.left = "", this.$body.style.top = "", this.$body.style.width = "", window.scrollTo(0, this.currentScrollY)), this.isModalOpen[e] = !1, this.isPlay[e] = !1, this.player[e].pause(), CheckDevice.isTab() && CheckDevice.isSafari() && this.garallySection && (this.garallySection.style.position = "static", setTimeout(() => {
                    this.garallySection.style.position = "fixed"
                }, 1e3)), gsap.fromTo(this.$circle, {
                    x: .5 * window.innerWidth,
                    y: .5 * window.innerHeight,
                    scale: 1
                }, {
                    duration: 1,
                    delay: .4,
                    ease: "power3.inOut",
                    x: .5 * window.innerWidth,
                    y: .5 * window.innerHeight,
                    scale: 0
                }), gsap.to(this.$modalClose, {
                    duration: .8,
                    ease: "power3.inOut",
                    opacity: 0
                }), gsap.to(this.$videoInner[e], {
                    duration: .8,
                    ease: "power3.inOut",
                    opacity: 0
                }), gsap.to(this.$videoBtn[e], {
                    duration: .8,
                    ease: "power3.inOut",
                    opacity: 0
                }), gsap.to(this.$itemCircle[e], {
                    duration: 1,
                    ease: "power3.inOut",
                    scale: 0
                }).eventCallback("onComplete", () => {
                    gsap.set(this.$itemCircle[e], {
                        display: "none"
                    })
                }), gsap.to(this.$itemTitle[e], {
                    duration: 1,
                    delay: 0,
                    ease: "power3.inOut",
                    clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
                    yPercent: 101
                }), gsap.to(this.$itemDesc[e], {
                    duration: 1,
                    delay: 0,
                    ease: "power3.inOut",
                    clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
                    yPercent: 101
                }), gsap.to(this.$itemInfoList[e], {
                    duration: 1,
                    delay: 0,
                    ease: "power3.inOut",
                    clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
                    yPercent: 101
                }), gsap.to({}, {
                    duration: 1.4
                }).eventCallback("onComplete", () => {
                    gsap.set(this.$modal, {
                        display: "none"
                    }), gsap.set(this.$modalItem[e], {
                        pointerEvents: "none"
                    })
                })
            }
        }
        class c {
            constructor() {
                this.$body = document.querySelector("body"), this.$humberger = document.querySelector("#js-header__humberger"), this.$menu = document.querySelector("#js-header__menu"), this.$chara = document.querySelector(".header__menu-chara"), this.$circle = document.querySelector("#js-header__menu-circle"), this.garallySection = document.querySelector(".index-section--gallery"), gsap.set(this.$chara, {
                    yPercent: 10
                }), gsap.set(this.$circle, {
                    scale: 0
                }), this.$humberger.addEventListener("click", e => {
                    e.preventDefault(), this.$humberger.classList.contains("is-active") ? this.closeMenu() : this.openMenu()
                }, {
                    passive: !1
                }), THEBLUEHAMHAM.closeMenu = () => {
                    this.closeMenu()
                }
            }
            openMenu() {
                this.$body.classList.add("is-active-menu"), this.$humberger.classList.add("is-active"), this.$menu.classList.add("is-active"), gsap.to(this.$chara, {
                    yPercent: 0,
                    duration: .8,
                    delay: .3,
                    ease: "elastic.out(1, 0.4)"
                }), gsap.to(this.$circle, {
                    duration: 1.2,
                    ease: "power3.inOut",
                    scale: 1
                })
            }
            closeMenu() {
                CheckDevice.isTab() && CheckDevice.isSafari() && (this.garallySection.style.position = "static", setTimeout(() => {
                    this.garallySection.style.position = "fixed"
                }, 600)), this.$body.classList.remove("is-active-menu"), this.$humberger.classList.remove("is-active"), this.$menu.classList.remove("is-active"), gsap.to(this.$chara, {
                    yPercent: 10,
                    duration: .8,
                    delay: .6,
                    ease: "power3.out"
                }), gsap.to(this.$circle, {
                    duration: 1.2,
                    ease: "power3.inOut",
                    scale: 0
                })
            }
        }
        class d {
            constructor() {
                this.$newsItemLink = document.querySelectorAll(".cmn-news__item-link"), this.$cmnAnimationHoverBounce = document.querySelectorAll("[data-animation-hover-bounce]"), window.addEventListener("load", () => {
                    this.$cmnAnimationHoverBounceForSwiper = document.querySelectorAll("[data-animation-hover-bounce-for-swiper]");
                    for (let e = 0; e < this.$cmnAnimationHoverBounceForSwiper.length; e++) {
                        const t = this.$cmnAnimationHoverBounceForSwiper[e].hasAttribute("data-animation-hover-bounce--leave-no-bounce"),
                            i = this.$cmnAnimationHoverBounceForSwiper[e].querySelector("[data-animation-hover-bounce--target]") || this.$cmnAnimationHoverBounceForSwiper[e];
                        this.$cmnAnimationHoverBounceForSwiper[e].addEventListener("mouseenter", () => {
                            window.innerWidth <= THEBLUEHAMHAM.BREAKPOINT || gsap.to(i, {
                                duration: .8,
                                ease: "elastic.out(1, 0.4)",
                                scale: 1.1
                            })
                        }, {
                            passive: !0
                        }), this.$cmnAnimationHoverBounceForSwiper[e].addEventListener("mouseleave", () => {
                            window.innerWidth <= THEBLUEHAMHAM.BREAKPOINT || gsap.to(i, {
                                duration: .8,
                                ease: t ? "power2.out" : "elastic.out(1, 0.4)",
                                scale: 1
                            })
                        }, {
                            passive: !0
                        })
                    }
                });
                for (let e = 0; e < this.$cmnAnimationHoverBounce.length; e++) {
                    const t = this.$cmnAnimationHoverBounce[e].hasAttribute("data-animation-hover-bounce--leave-no-bounce"),
                        i = this.$cmnAnimationHoverBounce[e].querySelector("[data-animation-hover-bounce--target]") || this.$cmnAnimationHoverBounce[e];
                    this.$cmnAnimationHoverBounce[e].addEventListener("mouseenter", () => {
                        window.innerWidth <= THEBLUEHAMHAM.BREAKPOINT || gsap.to(i, {
                            duration: .8,
                            ease: "elastic.out(1, 0.4)",
                            scale: 1.1
                        })
                    }, {
                        passive: !0
                    }), this.$cmnAnimationHoverBounce[e].addEventListener("mouseleave", () => {
                        window.innerWidth <= THEBLUEHAMHAM.BREAKPOINT || gsap.to(i, {
                            duration: .8,
                            ease: t ? "power2.out" : "elastic.out(1, 0.4)",
                            scale: 1
                        })
                    }, {
                        passive: !0
                    })
                }
            }
        }
        class u extends EventEmitter {
            constructor() {
                super(), this.$link = document.querySelectorAll("#js-wrapper a"), this.isKey = !1;
                for (let e = 0; e < this.$link.length; e++) this.$link[e].addEventListener("click", e => {
                    const t = e.currentTarget,
                        i = t.getAttribute("href");
                    this.isKey || -1 !== i.indexOf("#") || -1 !== i.indexOf("mailto") || -1 !== i.indexOf("tel") || -1 !== i.indexOf(".pdf") || null !== t.getAttribute("target") || t.hasAttribute("data-normal-transition") || (e.preventDefault(), this.emit("BEFORE_TRANSFORM"), setTimeout(() => {
                        location.href = i
                    }, CheckDevice.isSafari() ? 800 : 600))
                }, {
                    passive: !1
                });
                window.addEventListener("keydown", () => {
                    this.isKey = !0
                }), window.addEventListener("keyup", () => {
                    this.isKey = !1
                })
            }
        }
        class h {
            constructor() {
                this.$cmnPageTransform = document.querySelector("#js-cmn-page-transform"), this.$cmnPageTransformCircle = document.querySelector("#js-cmn-page-transform__circle"), this.$lowerPageTransformInner = document.querySelector("#js-lower-page-transform__circle"), this.pageTransform = new u, this.clientX = 0, this.clientY = 0, window.addEventListener("mousemove", e => {
                    this.clientX = e.clientX, this.clientY = e.clientY
                }, {
                    passive: !0
                }), window.addEventListener("touchstart", e => {
                    this.clientX = e.changedTouches[0].pageX, this.clientY = e.changedTouches[0].pageY
                }, {
                    passive: !0
                }), this.pageTransform.on("BEFORE_TRANSFORM", () => {
                    this.$cmnPageTransform.style.pointerEvents = "auto", gsap.set(this.$cmnPageTransformCircle, {
                        x: this.clientX,
                        y: this.clientY
                    }), gsap.to(this.$cmnPageTransformCircle, {
                        duration: 1,
                        ease: "power3.inOut",
                        scale: 1
                    })
                }), document.querySelector("body").classList.contains("home") || window.addEventListener("load", () => {
                    this.scaleZero()
                }), window.addEventListener("pageshow", e => {
                    e.persisted && location.reload()
                })
            }
            scaleZero() {
                gsap.to(this.$lowerPageTransformInner, {
                    duration: 1,
                    ease: "power3.inOut",
                    scale: 0
                })
            }
        }
        class m {
            constructor() {
                this.$footerScroll = document.querySelector(".footer__scroll"), null !== this.$footerScroll && this.$footerScroll.addEventListener("click", e => {
                    e.preventDefault(), gsap.to(window, {
                        duration: .6,
                        ease: "power2.out",
                        scrollTo: {
                            y: 0
                        }
                    })
                })
            }
        }
        class p {
            constructor() {
                window.addEventListener("load", () => {
                    document.body.classList.add("is-load")
                }), new h, new c, new m, new a, new d, new l, new s, new o, new n
            }
        }
        new p
    }
});