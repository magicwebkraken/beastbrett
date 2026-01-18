(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [405], {
        8312: function (e, t, s) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/", function () {
                return s(9935)
            }])
        },
        9935: function (e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function () {
                    return w
                }
            });
            var a = s(5893),
                r = s(1058),
                l = s(1163),
                n = s(7294),
                i = function (e) {
                    var t = e.children;
                    return (0, a.jsx)("div", {
                        className: "w-full p-0 m-0 bg-gradient-to-r from-bg2 to-bg1 cursor-default overflow-x-hidden",
                        children: t
                    })
                },
                o = s(603),
                c = s(8193),
                d = s(6261),
                A = {
                    src: "/_next/static/media/logo.4aabaf1d.png",
                    height: 640,
                    width: 640,
                    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAUVBMVEUCDkURFkcycZkMn9sZRXAXG0UZMF4bSXgsf6cBBDwiX40oi7QjQmwWKFgnha4QlM09boElOWE5T28LI1c+eIg8VHA2codbTjNLalMfi7o+mLj7UWIhAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAP0lEQVR4nAXBBwKAIAwAsWO2bHDr/x9qAoa4jIFmw/cuuxOn1aGzcV7OuXFsSNfHa/EQ5K41ACn3IgkgR/GJH1PnAjX6HpgbAAAAAElFTkSuQmCC",
                    blurWidth: 8,
                    blurHeight: 8
                },
                h = s(3990);

            function x() {
                var e = (0, n.useState)(!1),
                    t = e[0],
                    s = e[1],
                    i = (0, n.useState)(!1);
                i[0], i[1];
                var x = (0, n.useState)(0),
                    m = x[0],
                    p = x[1],
                    u = (0, n.useState)(!0),
                    f = u[0],
                    g = u[1],
                    w = [
                        ["Home", null],
                        ["About", null],
                        ["Tokenomics", null],
                        ["Roadmap", null],
                        ["Socials", null],
                    ],
                    b = (0, l.useRouter)();
                return (0, n.useEffect)(function () {
                    if (s(!1), "/" === b.pathname) return g(!0);
                    g(!1)
                }, [b]), (0, n.useEffect)(function () {
                    var e = function () {
                        window.pageYOffset, p(window.scrollY)
                    };
                    document.addEventListener("scroll", e, {
                        passive: !0
                    })
                }, []), (0, a.jsxs)("div", {
                    className: "fixed top-0 z-40 w-full",
                    children: [(0, a.jsxs)("div", {
                        className: "".concat(m < 70 && "bg-primary/90 backdrop-blur-sm" || "bg-primary border-b-4 border-black shadow-cartoon", " transition-all duration-500 p-4 md:px-16 md:py-6 flex w-full items-center justify-between h-20"),
                        children: [(0, a.jsx)("div", {
                            className: "block w-12 md:w-16 bg-white p-2 rounded-full border-4 border-black shadow-cartoon-lg hover:shadow-cartoon-xl transform hover:scale-110 hover:rotate-6 transition-all duration-300 animate-float",
                            children: (0, a.jsx)(r.Z, {
                                src: A,
                                alt: "GORO logo",
                                layout: "responsive",
                                className: "rounded-full"
                            })
                        }), (0, a.jsx)("ul", {
                            className: "md:flex hidden gap-4",
                            children: f && w.map(function (e, t) {
                                var s = (0, o.Z)(e, 2),
                                    r = s[0];
                                return s[1], (0, a.jsx)(d.rU, {
                                    className: "relative mx-2 text-white text-xl font-bold cursor-pointer bg-pepeDark px-4 py-2 rounded-full border-3 border-black shadow-cartoon hover:shadow-cartoon-lg hover:bg-pepeGreen hover:scale-105 hover:-rotate-2 transform transition-all duration-300",
                                    activeClass: "none",
                                    to: "".concat(r),
                                    spy: !0,
                                    smooth: !0,
                                    offset: -70,
                                    duration: 500,
                                    children: r
                                }, t)
                            })
                        }), (0, a.jsx)("button", {
                            className: "md:hidden relative p-3 outline-none rounded-full border-4 border-black shadow-cartoon hover:shadow-cartoon-xl hover:scale-110 hover:rotate-12 transform transition-all duration-300 z-50 ".concat(t ? "animate-wiggle bg-pepeDark" : "bg-white"),
                            onClick: function () {
                                return s(!t)
                            },
                            children: t && (0, a.jsx)(c.oHP, {
                                size: 28,
                                className: "text-white"
                            }) || (0, a.jsx)(h.rSC, {
                                size: 28,
                                className: "text-pepeDark"
                            })
                        })]
                    }), (0, a.jsx)("div", {
                        className: "md:hidden absolute z-40 overflow-hidden flex bg-primary border-4 border-black  w-full items-center justify-center transition-all ease-out duration-300 ".concat(t && "max-h-96 py-8" || "max-h-0 py-0"),
                        children: (0, a.jsx)("ul", {
                            className: "flex flex-col gap-4",
                            children: f && w.map(function (e, t) {
                                var r = (0, o.Z)(e, 2),
                                    l = r[0];
                                return r[1], f && (0, a.jsx)(d.rU, {
                                    className: "text-white text-center text-2xl font-bold bg-pepeDark px-6 py-3 rounded-full border-3 border-black shadow-cartoon hover:shadow-cartoon-lg hover:bg-pepeGreen hover:scale-105 hover:rotate-2 transform transition-all duration-300 cursor-pointer",
                                    onClick: function () {
                                        return s(!1)
                                    },
                                    activeClass: "active",
                                    to: "".concat(l),
                                    spy: !0,
                                    smooth: !0,
                                    offset: -70,
                                    duration: 500,
                                    children: l
                                }, t) || (0, a.jsx)("li", {
                                    className: "text-white text-center text-2xl font-bold bg-pepeDark px-6 py-3 rounded-full border-3 border-black shadow-cartoon hover:shadow-cartoon-lg hover:bg-pepeGreen hover:scale-105 cursor-pointer",
                                    onClick: function () {
                                        return b.push("/")
                                    },
                                    children: l
                                }, t)
                            })
                        })
                    })]
                })
            }
            var m = s(8367),
                p = {
                    src: "/_next/static/media/about.0cb1412d.png",
                    height: 1280,
                    width: 672,
                    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAICAMAAADp7a43AAAAJ1BMVEWPf2xsYFRuZloMEBUXGx+Dc2GRk5JjYVtsbWyHhH4sLixyb2YpLC7SjO8BAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAJ0lEQVR4nAXBhwEAIAzDMDfdwP/3IhHhjlkPpBbMFlCR3ELq4Z3wDwlSAInqsGrCAAAAAElFTkSuQmCC",
                    blurWidth: 4,
                    blurHeight: 8
                },
                u = {
                    src: "/_next/static/media/1.562396d8.jpg",
                    height: 1280,
                    width: 853,
                    blurDataURL: "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAIAAUDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAT/xAAaEAACAgMAAAAAAAAAAAAAAAACAwARAQRB/8QAFQEBAQAAAAAAAAAAAAAAAAAAAgT/xAAcEQEAAQQDAAAAAAAAAAAAAAABEQACA0EhMWH/2gAMAwEAAhEDEQA/ALU7LwIx2AUyqwJMO+crMREjc93EBrVMwDMr279r/9k=",
                    blurWidth: 5,
                    blurHeight: 8
                },
                f = {
                    src: "/_next/static/media/3.4263cadf.jpg",
                    height: 1280,
                    width: 853,
                    blurDataURL: "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAIAAUDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAbEAADAAIDAAAAAAAAAAAAAAAAAQMCIQQREv/EABUBAQEAAAAAAAAAAAAAAAAAAAME/8QAGREAAgMBAAAAAAAAAAAAAAAAAAECESEi/9oADAMBAAIRAxEAPwCW0fFU5rGc0/O99gAtlrsVc4j/2Q==",
                    blurWidth: 5,
                    blurHeight: 8
                },
                g = {
                    src: "/_next/static/media/2.270d5dac.jpg",
                    height: 1280,
                    width: 853,
                    blurDataURL: "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAIAAUDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAcEAACAgIDAAAAAAAAAAAAAAAAAQIDEyEFEvD/xAAVAQEBAAAAAAAAAAAAAAAAAAABA//EABgRAQADAQAAAAAAAAAAAAAAAAEAAzEC/9oADAMBAAIRAxEAPwCXjyqqcpV1zeR9msj17YAINNbpEt7DZ//Z",
                    blurWidth: 5,
                    blurHeight: 8
                };
            s(4107);
            var w = function () {
                (0, l.useRouter)();
                var e = [u, f, g];
                return (0, a.jsxs)("div", {
                    children: [(0, a.jsx)(x, {}), (0, a.jsxs)(i, {
                        children: [(0, a.jsxs)("section", {
                            className: "md:h-[calc(100vh)] mb-0 pb-0 w-full bg-primary md:py-0 bg-cover pt-14 bg-left md:bg-top relative",
                            id: "Home",
                            children: [(0, a.jsxs)("div", {
                                className: "hero absolute w-full h-full z-10 bg-opacity-0 top-0 left-0",
                                children: [(0, a.jsx)("span", {}), (0, a.jsx)("span", {}), (0, a.jsx)("span", {}), (0, a.jsx)("span", {}), (0, a.jsx)("span", {}), (0, a.jsx)("span", {}), (0, a.jsx)("span", {}), (0, a.jsx)("span", {}), (0, a.jsx)("span", {}), (0, a.jsx)("span", {})]
                            }), (0, a.jsxs)("div", {
                                className: "h-full flex relative flex-col overflow-y-hidden items-center justify-center md:justify-around md:flex-row-reverse md:gap-8 md:items-center w-full pepe-container md:pt-8 md:pb-0 pt-20 pb-20 z-30",
                                children: [(0, a.jsx)("div", {
                                    className: "w-3/4 md:w-1/3 md:block z-20 bg-white p-1 rounded-lg border-4 border-black shadow-cartoon-lg animate-float",
                                    children: (0, a.jsx)(r.Z, {
                                        src: A,
                                        alt: "illustration",
                                        layout: "responsive",
                                        className: "rounded-lg "
                                    })
                                }), (0, a.jsx)("div", {
                                    className: "flex flex-col justify-center items-center md:items-start md:pt-0 px-6 md:p-3 w-full md:w-1/2",
                                    children: (0, a.jsxs)(m.sm, {
                                        children: [(0, a.jsxs)("h3", {
                                            className: "text-7xl md:text-8xl text-center text-white my-3 md:text-left z-30 font-[Greek-Freak] drop-shadow-lg transform hover:animate-wiggle",
                                            children: ["BEASTBRETT", (0, a.jsx)("br", {})]
                                        }), (0, a.jsx)("div", {
                                            className: "pepe-chip text-lg md:text-xl",
                                            children: "$BEASTBRETT"
                                        }), (0, a.jsx)("p", {
                                            className: "text-white md:text-6xl text-3xl text-center my-5 md:text-start drop-shadow-md",
                                            children: "Matt Furie's latest surreal amphibian icon"
                                        }), (0, a.jsx)("p", {
                                            className: "text-white md:text-xl text-lg text-center my-5 md:text-start drop-shadow-sm",
                                            children: "BEASTBRETT is the newest character created by artist Matt Furie. Introduced recently on Furie's official Instagram, BEASTBRETT continues his tradition of blending surreal humor, vibrant colors, and expressive, whimsical design."
                                        }), (0, a.jsx)("p", {
                                            className: "text-white md:text-xl text-center break-all my-5 md:text-start bg-pepeDark rounded-xl p-4 font-mono border-3 border-black shadow-cartoon",
                                            children: "0xcomingsoon"
                                        }), (0, a.jsxs)("div", {
                                            className: "flex justify-center md:justify-start items-center gap-3 w-full mt-5",
                                            children: [(0, a.jsxs)("a", {
                                                href: "https://www.dextools.io/app/en/base/pair-explorer/0xcomingsoon?t=1768765093078",
                                                className: "pepe-button",
                                                children: [(0, a.jsx)(r.Z, {
                                                    src: "https://s2.coinmarketcap.com/static/img/coins/200x200/5866.png",
                                                    alt: "Dextools",
                                                    width: 36,
                                                    height: 36,
                                                    className: "object-contain"
                                                }), (0, a.jsx)("span", {
                                                    className: "hidden sm:inline",
                                                    children: "Chart"
                                                })]
                                            }), (0, a.jsxs)("a", {
                                                href: "https://t.me/BEASTBRETT",
                                                className: "pepe-button",
                                                children: [(0, a.jsx)(r.Z, {
                                                    src: "https://pngimg.com/uploads/telegram/telegram_PNG12.png",
                                                    alt: "Telegram",
                                                    width: 36,
                                                    height: 36,
                                                    className: "object-contain"
                                                }), (0, a.jsx)("span", {
                                                    className: "hidden sm:inline",
                                                    children: "Telegram"
                                                })]
                                            }), (0, a.jsxs)("a", {
                                                href: "https://x.com/beast_brett",
                                                className: "pepe-button",
                                                children: [(0, a.jsx)(r.Z, {
                                                    src: "https://toppng.com/public/uploads/preview/twitter-x-icon-logo-116902890413xbfexhf8l.webp",
                                                    alt: "X",
                                                    width: 36,
                                                    height: 36,
                                                    className: "object-contain"
                                                }), (0, a.jsx)("span", {
                                                    className: "hidden sm:inline",
                                                    children: "Twitter"
                                                })]
                                            }), (0, a.jsxs)("a", {
                                                href: "https://dexscreener.com/base/0xcomingsoon",
                                                className: "pepe-button",
                                                children: [(0, a.jsx)(r.Z, {
                                                    src: "https://pbs.twimg.com/profile_images/1462287879565201409/5UYqudVs.jpg",
                                                    alt: "Dexscreener",
                                                    width: 36,
                                                    height: 36,
                                                    className: "object-contain"
                                                }), (0, a.jsx)("span", {
                                                    className: "hidden sm:inline",
                                                    children: "Dexscreener"
                                                })]
                                            })]
                                        })]
                                    })
                                })]
                            })]
                        }), (0, a.jsx)("section", {
                            className: "pepe-section bg-pepeGreen min-h-screen flex items-center",
                            id: "About",
                            children: (0, a.jsxs)("div", {
                                className: "w-full pepe-container",
                                children: [(0, a.jsx)(m.pT, {
                                    children: (0, a.jsx)("h3", {
                                        className: "text-5xl md:text-7xl mb-12 text-center w-full text-white font-[Greek-Freak] drop-shadow-lg",
                                        children: "About  BEASTBRETT"
                                    })
                                }), (0, a.jsxs)("div", {
                                    className: "flex flex-col md:flex-row gap-8 md:gap-12 items-center",
                                    children: [(0, a.jsx)(m.LG, {
                                        children: (0, a.jsx)("div", {
                                            className: "w-full md:w-1/2 flex justify-center",
                                            children: (0, a.jsx)("div", {
                                                className: "pepe-card p-6 w-full transform hover:rotate-1",
                                                children: (0, a.jsx)(r.Z, {
                                                    src: p,
                                                    alt: "GORO illustration",
                                                    layout: "responsive",
                                                    className: "rounded-2xl"
                                                })
                                            })
                                        })
                                    }), (0, a.jsxs)("div", {
                                        className: "w-full md:w-1/2 space-y-6",
                                        children: [(0, a.jsx)(m.sm, {
                                            children: (0, a.jsxs)("div", {
                                                className: "pepe-card text-gray-800 p-6 transform hover:-rotate-1",
                                                children: [(0, a.jsx)("h4", {
                                                    className: "text-2xl md:text-3xl font-[Greek-Freak] text-pepeDark mb-4",
                                                    children: "Welcome to  BEASTBRETT"
                                                }), (0, a.jsx)("p", {
                                                    className: "text-lg md:text-xl leading-relaxed",
                                                    children: "Meet the freshest face in the Pepeverse, a bold new muse straight from Matt Furie's sketchbook."
                                                })]
                                            })
                                        }), (0, a.jsx)(m.sm, {
                                            children: (0, a.jsx)("div", {
                                                className: "pepe-card bg-pepeDark text-white p-6 transform hover:rotate-1",
                                                children: (0, a.jsx)("p", {
                                                    className: "text-base md:text-lg leading-relaxed",
                                                    children: "BEASTBRETT is the newest character crafted by Matt Furie and debuted on his official Instagram, radiating that unmistakable Pepe energy."
                                                })
                                            })
                                        }), (0, a.jsx)(m.sm, {
                                            children: (0, a.jsx)("div", {
                                                className: "pepe-card text-gray-800 p-6 transform hover:-rotate-1",
                                                children: (0, a.jsx)("p", {
                                                    className: "text-base md:text-lg leading-relaxed",
                                                    children: "Blending surreal humor, vibrant colors, and expressive whimsy, BEASTBRETT carries Furie's legacy forward while staying true to the playful soul of Pepe."
                                                })
                                            })
                                        })]
                                    })]
                                })]
                            })
                        }), (0, a.jsxs)("section", {
                            className: "flex flex-col justify-center items-center pepe-section w-full bg-primary min-h-screen",
                            id: "Tokenomics",
                            children: [(0, a.jsx)(m.pT, {
                                children: (0, a.jsx)("h3", {
                                    className: "text-5xl md:text-7xl mb-16 text-center w-full text-white font-[Greek-Freak] drop-shadow-lg transform hover:animate-wiggle",
                                    children: "Tokenomics"
                                })
                            }), (0, a.jsx)("div", {
                                className: "flex flex-col md:flex-row md:flex-wrap justify-center w-full items-center gap-5 md:gap-6 pepe-container",
                                children: [{
                                    option: "Name",
                                    value: "BEASTBRETT"
                                }, {
                                    option: "Ticker",
                                    value: "$BEASTBRETT"
                                }, {
                                    option: "Supply",
                                    value: "10,000,000,000"
                                }, {
                                    option: "Tax",
                                    value: "0/0"
                                }, ].map(function (e, t) {
                                    return (0, a.jsx)(m.pT, {
                                        children: (0, a.jsx)("div", {
                                            className: "group py-8 px-6 md:py-12 w-full md:w-[30%] pepe-card flex flex-col items-center justify-center hover:scale-105 hover:rotate-2 h-full",
                                            children: (0, a.jsxs)("div", {
                                                className: "flex flex-col justify-center items-center w-full h-full",
                                                children: [(0, a.jsx)("h3", {
                                                    className: "z-10 text-4xl text-pepeDark my-4 text-center font-[Greek-Freak] drop-shadow-md",
                                                    children: e.option
                                                }), (0, a.jsx)("div", {
                                                    className: "md:text-3xl text-2xl z-10 text-center font-bold bg-pepeGreen text-white px-4 py-2 rounded-lg border-2 border-black shadow-cartoon",
                                                    children: e.value
                                                })]
                                            })
                                        })
                                    }, t)
                                })
                            }), (0, a.jsx)("div", {
                                className: "mt-10 w-full md:w-3/4 max-w-3xl flex flex-col items-center",
                                children: (0, a.jsxs)("div", {
                                    className: "pepe-card p-8 w-full transform hover:rotate-1",
                                    children: [(0, a.jsx)("h3", {
                                        className: "text-4xl text-pepeDark text-center mb-6 font-[Greek-Freak] drop-shadow-md",
                                        children: "Contract Address"
                                    }), (0, a.jsx)("p", {
                                        className: "text-white bg-pepeDark text-center break-all font-mono p-4 rounded-xl border-3 border-black shadow-cartoon text-lg",
                                        children: "0xcomingsoon"
                                    })]
                                })
                            })]
                        }), (0, a.jsxs)("section", {
                            className: "flex flex-col justify-center items-center pepe-section w-full bg-pepeGreen min-h-screen",
                            id: "Roadmap",
                            children: [(0, a.jsx)(m.pT, {
                                children: (0, a.jsx)("h3", {
                                    className: "text-5xl md:text-7xl mb-16 text-center w-full text-white font-[Greek-Freak] drop-shadow-lg transform hover:animate-wiggle",
                                    children: "Roadmap"
                                })
                            }), (0, a.jsx)("div", {
                                className: "flex flex-col md:flex-row md:flex-wrap justify-center w-full items-stretch gap-8 md:gap-10 pepe-container",
                                children: [{
                                    title: "Phase 1",
                                    desc: ["Create and launch official social media channels", "Develop and deploy the smart contract", "Build and launch the official website", "Prepare and execute initial marketing campaigns", ]
                                }, {
                                    title: "Phase 2",
                                    desc: ["Grow the community through engaging campaigns", "Implement a comprehensive marketing strategy", "Collaborate with influencers and promoters", "Run targeted ads on social media and crypto platforms", ]
                                }, {
                                    title: "Phase 3",
                                    desc: ["Expand community growth efforts", "Trend on popular platforms like Dexscreener and Solana", "Apply for listings on centralized exchanges (CEXs)", "Achieve CoinMarketCap (CMC) and Coingecko listings", "Trending on BASE", ]
                                }, ].map(function (t, s) {
                                    return (0, a.jsx)(m.pT, {
                                        children: (0, a.jsx)("div", {
                                            className: "group py-8 px-6 md:pb-12 w-full md:w-[30%] pepe-card flex flex-col items-center justify-start hover:scale-105 transition-all duration-300 h-full ".concat(s % 2 == 0 ? "hover:rotate-2" : "hover:-rotate-2"),
                                            children: (0, a.jsxs)("div", {
                                                className: "flex flex-col items-center w-full h-full",
                                                children: [(0, a.jsx)("div", {
                                                    className: "w-full mb-4 rounded-xl overflow-hidden border-3 border-black shadow-cartoon",
                                                    children: (0, a.jsx)(r.Z, {
                                                        src: e[s],
                                                        alt: "".concat(t.title, " image"),
                                                        layout: "responsive",
                                                        className: "rounded-xl"
                                                    })
                                                }), (0, a.jsx)("div", {
                                                    className: "bg-pepeDark text-white px-6 py-3 rounded-full border-3 border-black shadow-cartoon mb-6",
                                                    children: (0, a.jsx)("h3", {
                                                        className: "z-10 text-3xl md:text-4xl text-center font-[Greek-Freak] drop-shadow-md",
                                                        children: t.title
                                                    })
                                                }), (0, a.jsx)("div", {
                                                    className: "md:text-lg text-gray-800 z-10 space-y-4",
                                                    children: t.desc.map(function (e, t) {
                                                        return (0, a.jsxs)("div", {
                                                            className: "flex items-start text-left gap-3 bg-gray-50 p-4 rounded-xl border-2 border-gray-300 shadow-sm hover:shadow-cartoon-green transition-all duration-200",
                                                            children: [(0, a.jsx)("div", {
                                                                className: "bg-pepeGreen text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold border-2 border-black flex-shrink-0 mt-1",
                                                                children: t + 1
                                                            }), (0, a.jsx)("div", {
                                                                className: "font-medium leading-relaxed",
                                                                children: e
                                                            })]
                                                        }, t)
                                                    })
                                                })]
                                            })
                                        })
                                    }, s)
                                })
                            })]
                        }), (0, a.jsxs)("section", {
                            className: "flex flex-col justify-center pt-16 items-center pepe-section w-full bg-primary min-h-screen",
                            id: "Socials",
                            children: [(0, a.jsx)(m.pT, {
                                children: (0, a.jsx)("h3", {
                                    className: "text-center text-5xl md:text-7xl mb-12 w-fit p-1 text-white font-[Greek-Freak] drop-shadow-lg transform hover:animate-wiggle",
                                    children: "Join the Community"
                                })
                            }), (0, a.jsx)("div", {
                                className: "pepe-card text-gray-800 p-8 max-w-4xl mx-auto mb-12 transform hover:rotate-1",
                                children: (0, a.jsx)("p", {
                                    className: "text-xl md:text-3xl text-center font-semibold",
                                    children: "Be part of something special. Join the $BEASTBRETT community as we celebrate Matt Furie's newest creation"
                                })
                            }), (0, a.jsx)("div", {
                                className: "flex w-full md:w-3/5 flex-col items-center justify-center relative h-full transition-all duration-500",
                                children: (0, a.jsx)(m.LG, {
                                    children: (0, a.jsxs)("div", {
                                        className: "flex flex-wrap justify-center items-center gap-3 w-full mt-5",
                                        children: [(0, a.jsxs)("a", {
                                            href: "https://t.me/BEASTBRETT",
                                            className: "pepe-button",
                                            children: [(0, a.jsx)(r.Z, {
                                                src: "https://pngimg.com/uploads/telegram/telegram_PNG12.png",
                                                alt: "Telegram",
                                                width: 28,
                                                height: 28,
                                                className: "object-contain"
                                            }), (0, a.jsx)("span", {
                                                className: "hidden sm:inline",
                                                children: "Telegram"
                                            })]
                                        }), (0, a.jsxs)("a", {
                                            href: "https://x.com/beast_brett",
                                            className: "pepe-button",
                                            children: [(0, a.jsx)(r.Z, {
                                                src: "https://toppng.com/public/uploads/preview/twitter-x-icon-logo-116902890413xbfexhf8l.webp",
                                                alt: "Twitter",
                                                width: 28,
                                                height: 28,
                                                className: "object-contain"
                                            }), (0, a.jsx)("span", {
                                                className: "hidden sm:inline",
                                                children: "Twitter"
                                            })]
                                        }), (0, a.jsxs)("a", {
                                            href: "https://www.dextools.io/app/en/base/pair-explorer/0xcomingsoon?t=1768765093078",
                                            className: "pepe-button",
                                            children: [(0, a.jsx)(r.Z, {
                                                src: "https://s2.coinmarketcap.com/static/img/coins/200x200/5866.png",
                                                alt: "Dextools",
                                                width: 28,
                                                height: 28,
                                                className: "object-contain"
                                            }), (0, a.jsx)("span", {
                                                className: "hidden sm:inline",
                                                children: "Chart"
                                            })]
                                        }), (0, a.jsxs)("a", {
                                            href: "https://dexscreener.com/base/0xcomingsoon",
                                            className: "pepe-button",
                                            children: [(0, a.jsx)(r.Z, {
                                                src: "https://pbs.twimg.com/profile_images/1462287879565201409/5UYqudVs.jpg",
                                                alt: "Dexscreener",
                                                width: 28,
                                                height: 28,
                                                className: "object-contain"
                                            }), (0, a.jsx)("span", {
                                                className: "hidden sm:inline",
                                                children: "Dexscreener"
                                            })]
                                        })]
                                    })
                                })
                            })]
                        }), (0, a.jsx)("section", {
                            className: "text-lg bg-pepeDark text-center p-8 text-white border-t-4 border-black shadow-cartoon-white",
                            children: (0, a.jsxs)("div", {
                                className: "pepe-chip bg-white text-pepeDark inline-block",
                                children: ["BEASTBRETT ", new Date().getFullYear(), " | All Rights Reserved."]
                            })
                        })]
                    })]
                })
            }
        }
    },
    function (e) {
        e.O(0, [609, 617, 488, 774, 888, 179], function () {
            return e(e.s = 8312)
        }), _N_E = e.O()
    }
]);