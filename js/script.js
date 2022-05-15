$(document).ready(function () {
    // 모달창
    let $modal = $('.modal');
    let $modal_close = $('.modal-close');
    let $comment_bt = $('.comment-bt');
    let $m_comment = $('.m-comment');
    if (window.innerWidth <= 480) {
        modal();
    }

    // $(document).bind('touchmove', function (e) {
    // });

    function modal() {
        // 모달창 활성버튼
        $m_comment.click(function () {
            $modal.fadeIn(300);
        });
        // 모달창 닫기버튼
        $modal_close.click(function () {
            $modal.fadeOut(300);
        })
    }

    // 위로가기 버튼
    // let $gotop = $('.gotop');
    // $gotop.click(function () {
    //     wrap_swiper.slideTo(0, 500);
    //     $bg.css('transform', 'translateY(0)');
    // })

    // 변수
    let $sticker_img = $('.sticker img');
    let $bg = $('.bg');
    let $field = $('.field');
    let prevIndex = 0; // 이전 슬라이드번호
    let $header = $('.header');
    let $swiper_wrapper = $('.swiper-wrapper');
    let $wrap_slide = $('.wrap-slide');
    let $skill_box = $('.skill-box');
    let $skill_txtbox = $('.skill-txtbox');
    let $contact_nav = $('.contact-nav');
    let $contact_bt = $('.contact-bt');
    let $contact_wrap = $('.contact-wrap');

    // 전체 메뉴 버튼
    let $all_menu_bt = $('.all-menu-bt');
    let $all_menu = $('.all-menu');
    $all_menu_bt.click(function () {
        $(this).toggleClass('all-menu-bt-active');
        $all_menu.toggleClass('all-menu-active');
    })

    // 메인화면 
    let stat_once = 0;
    let mbti_once = 0;
    let menu = ['HOME', 'ABOUT', 'PROJECT', 'SKILL', 'MBTI', 'LIFE','CONTACT']
    let wrap_swiper = undefined;

    function wrap() {
        if (window.innerWidth > 1024) {
            $bg.css('transform', 'scale(.8)');
            if (typeof (wrap_swiper) == 'object') {
                wrap_swiper.destroy();
            }
            wrap_swiper = new Swiper(".wrap-swiper", {
                direction: 'vertical',
                effect: 'fade',
                slidesPerView: 1,
                mousewheel: true,
                touchRatio: 0,
                speed: 500,
                on: {
                    slideChange: function () {
                        let innerAngle = (this.realIndex - prevIndex) * 60;
                        if (this.realIndex != 0) {

                        }
                        $('.page-txt').each(function (index, item) {
                            $(this).rotate(innerAngle - (60 * index));
                        });
                        $sticker_img.rotate(innerAngle);
                        $sticker_img.eq(0).rotate(-innerAngle);
                        $sticker_img.eq(2).rotate(-innerAngle);
                        $('.wrap-slide').removeClass('wrap-active');
                        $('.wrap-slide').eq(this.realIndex).addClass('wrap-active');
                        if (this.realIndex == 0) {
                            $header.fadeIn(300);
                        }
                        if (this.realIndex != 0) {
                            $header.fadeOut(300);
                        }
                        if (this.realIndex == 3 && stat_once == 0) {
                            stat();
                            stat_once = 1;
                            $bg.css('transform', 'scale(.8)');
                            return stat_once;
                        } else if (this.realIndex == 4 && mbti_once == 0) {
                            mbti();
                            mbti_once = 1;
                            $bg.css('transform', 'scale(.8)');
                            return mbti_once;
                        } else if (this.realIndex == 6) {
                            $contact_nav.addClass('nav-off');
                            $contact_nav.delay(400).fadeOut(200);
                        } else if (this.realIndex != 6) {
                            $contact_nav.fadeIn(300);
                            $contact_nav.removeClass('nav-off');
                            $contact_nav.mouseleave(function () {
                                $contact_nav.addClass('contact-on');
                            });
                            $contact_nav.mouseenter(function () {
                                $contact_nav.addClass('contact-on');
                            });
                            $contact_nav.mouseleave(function () {
                                $contact_nav.removeClass('contact-on');
                            });
                        }
                    }
                }
            });
        } else if (window.innerWidth <= 1024) {
            $('.wrap').bind('mousewheel', function (e) {
                if (window.innerWidth > 480) {
                    // 마우스 휠 시
                    let pos = parseInt($swiper_wrapper.offset().top);
                    $bg.css('transform', 'translateY(' + pos / 4 + 'px) scale(0.8)');
                }
            })

            if (typeof (wrap_swiper) == 'object') {
                wrap_swiper.destroy();
            }

            wrap_swiper = new Swiper(".wrap-swiper", {
                direction: 'vertical',
                slidesPerView: 'auto',
                touchRatio: 1,
                mousewheel: true,
                freeMode: true,
                pagination: {
                    el: ".gnb",
                    clickable: true,
                    renderBullet: function (index, className) {
                        return '<span class="' + className + '">' + (menu[index]) + '</span>';
                    },
                },
                on: {
                    slideChange: function () {
                        contact(this.realIndex);
                        $('.wrap-slide').eq(this.realIndex).addClass('wrap-active');
                        console.log(this.realIndex);
                        if (this.realIndex == 3 && stat_once == 0) {
                            stat();
                            stat_once = 1;
                            return stat_once;
                        }
                        if (this.realIndex == 4 && mbti_once == 0) {
                            mbti();
                            mbti_once = 1;
                            return mbti_once;
                        }
                    }
                }

            });
        }
    }
    // 컨택
    let contact_once = 0;

    function contact(_index) {
        if (_index != 6) {
            $contact_nav.fadeIn(300);
            $contact_nav.removeClass('nav-off');
            
        } else if (_index == 6) {
            $contact_nav.delay(400).fadeOut(200);
            if (contact_once == 0) {
                if (window.innerWidth <= 1024) {
                    contact_once = 1;
                }
                if (window.innerWidth > 1024) {
                    $contact_nav.addClass('nav-off');
                }
            }
        }
        if (window.innerWidth < 480) {
            $contact_bt.click(function () {
                $contact_nav.toggleClass('contact-on');
                console.log('tq');
            })
        } else if (window.innerWidth >= 480) {
            $contact_nav.mouseleave(function () {
                $contact_nav.addClass('contact-on');
            });
            $contact_nav.mouseenter(function () {
                $contact_nav.addClass('contact-on');
            });
            $contact_nav.mouseleave(function () {
                $contact_nav.removeClass('contact-on');
            });
        }
    }
    var life_swiper = new Swiper(".life-swiper", {
        effect: "fade",
        autoplay: {
            delay: 5000,
        },
        speed: 500,
        spaceBetween: 20,
        loop: true,
        grabCursor: true,
        navigation: {
            nextEl: ".sw-life-next",
        },
    });
    // 포트폴리오 모드 변경
    let $portfolio = $('.portfolio');
    let $clone_bt = $('.clone-bt');
    let $project_bt = $('.project-bt');
    $clone_bt.click(function () {
        $portfolio.removeClass('clone-on project-on');
        $portfolio.addClass('clone-on');
    })
    $project_bt.click(function () {
        $portfolio.removeClass('clone-on project-on');
        $portfolio.addClass('project-on');
    })
    // 클론 슬라이드
    let portfolio_swiper = new Swiper(".portfolio-swiper", {
        slidesPerView: 1,
        loopAdditionalSlides: 3,
        loop: true,
        speed: 300,
        centeredSlides: true,
        spaceBetween: 0,
        navigation: {
            nextEl: ".sw-portfolio-next",
            prevEl: ".sw-portfolio-prev",
        },
        pagination: {
            el: ".port-pg",
            type: "fraction",
        },

    });
    // 프로젝트 슬라이드
    let project_swiper = new Swiper(".project-swiper", {
        slidesPerView: 1,
        loopAdditionalSlides: 3,
        speed: 300,
        centeredSlides: true,
        spaceBetween: 0,
        navigation: {
            nextEl: ".sw-portfolio-next",
            prevEl: ".sw-portfolio-prev",
        },
        pagination: {
            el: ".port-pg",
            type: "fraction",
        },

    });
    // 스킬 프로그레스 바 
    function stat() {
        let htmlbar = new ProgressBar.Circle(htmlstat, {
            strokeWidth: 5,
            easing: 'easeInOut',
            duration: 1400,
            delay: 200,
            trailWidth: 0,
            svgStyle: {
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                backgroundColor: ''
            },
            text: {
                style: {
                    color: '#000',
                    whiteSpace: 'nowrap',
                    position: 'absolute',
                    cursor: 'default',
                    transform: 'translateX(-50%)',
                    left: '50%',
                    top: '60%',
                    fontSize: '20px',
                    letterSpacing: '-1px',
                },
                autoStyleContainer: false,
            },
            step: function (state, circle) {
                circle.path.setAttribute('stroke', state.color);
                circle.path.setAttribute('stroke-width', state.width);

                var value = Math.round(circle.value() * 100);
                if (value === 0) {
                    circle.setText('');
                } else {
                    circle.setText(value);
                }

            },
            from: {
                color: '#FF651E',
                width: 5
            },
            to: {
                color: '#FF651E',
                width: 5,
            },
        });
        let cssbar = new ProgressBar.Circle(cssstat, {
            strokeWidth: 5,
            easing: 'easeInOut',
            duration: 1300,
            delay: 300,
            trailWidth: 0,
            svgStyle: {
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                backgroundColor: ''
            },
            text: {
                style: {
                    color: '#000',
                    whiteSpace: 'nowrap',
                    position: 'absolute',
                    cursor: 'default',
                    transform: 'translateX(-50%)',
                    left: '50%',
                    top: '60%',
                    fontSize: '20px',
                    letterSpacing: '-1px',
                },
                autoStyleContainer: false,
            },
            step: function (state, circle) {
                circle.path.setAttribute('stroke', state.color);
                circle.path.setAttribute('stroke-width', state.width);

                var value = Math.round(circle.value() * 100);
                if (value === 0) {
                    circle.setText('');
                } else {
                    circle.setText(value);
                }

            },
            from: {
                color: '#379ad6',
                width: 5
            },
            to: {
                color: '#379ad6',
                width: 5
            },
        });
        let jsbar = new ProgressBar.Circle(jsstat, {
            strokeWidth: 5,
            easing: 'easeInOut',
            duration: 1400,
            delay: 400,
            trailWidth: 0,
            svgStyle: {
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                backgroundColor: ''
            },
            text: {
                style: {
                    color: '#000',
                    whiteSpace: 'nowrap',
                    position: 'absolute',
                    cursor: 'default',
                    transform: 'translateX(-50%)',
                    left: '50%',
                    top: '60%',
                    fontSize: '20px',
                    letterSpacing: '-1px',
                },
                autoStyleContainer: false,
            },
            step: function (state, circle) {
                circle.path.setAttribute('stroke', state.color);
                circle.path.setAttribute('stroke-width', state.width);

                var value = Math.round(circle.value() * 100);
                if (value === 0) {
                    circle.setText('');
                } else {
                    circle.setText(value);
                }

            },
            from: {
                color: '#FFE100',
                width: 5
            },
            to: {
                color: '#FFE100',
                width: 5
            },
        });
        let vuebar = new ProgressBar.Circle(vuestat, {
            strokeWidth: 5,
            easing: 'easeInOut',
            duration: 1400,
            delay: 600,
            trailWidth: 0,
            svgStyle: {
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                backgroundColor: ''
            },
            text: {
                style: {
                    color: '#000',
                    whiteSpace: 'nowrap',
                    position: 'absolute',
                    cursor: 'default',
                    transform: 'translateX(-50%)',
                    left: '50%',
                    top: '60%',
                    fontSize: '20px',
                    letterSpacing: '-1px',
                },
                autoStyleContainer: false,
            },
            step: function (state, circle) {
                circle.path.setAttribute('stroke', state.color);
                circle.path.setAttribute('stroke-width', state.width);

                var value = Math.round(circle.value() * 100);
                if (value === 0) {
                    circle.setText('');
                } else {
                    circle.setText(value);
                }

            },
            from: {
                color: '#00c180',
                width: 5
            },
            to: {
                color: '#00c180',
                width: 5
            },
        });
        let gitbar = new ProgressBar.Circle(gitstat, {
            strokeWidth: 5,
            easing: 'easeInOut',
            duration: 1400,
            delay: 600,
            trailWidth: 0,
            svgStyle: {
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                backgroundColor: ''
            },
            text: {
                style: {
                    color: '#000',
                    whiteSpace: 'nowrap',
                    position: 'absolute',
                    cursor: 'default',
                    transform: 'translateX(-50%)',
                    left: '50%',
                    top: '60%',
                    fontSize: '20px',
                    letterSpacing: '-1px',
                },
                autoStyleContainer: false,
            },
            step: function (state, circle) {
                circle.path.setAttribute('stroke', state.color);
                circle.path.setAttribute('stroke-width', state.width);

                var value = Math.round(circle.value() * 100);
                if (value === 0) {
                    circle.setText('');
                } else {
                    circle.setText(value);
                }

            },
            from: {
                color: '#1b1d21',
                width: 5
            },
            to: {
                color: '#1b1d21',
                width: 5
            },
        });
        let bootbar = new ProgressBar.Circle(bootstat, {
            strokeWidth: 5,
            easing: 'easeInOut',
            duration: 1400,
            delay: 600,
            trailWidth: 0,
            svgStyle: {
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                backgroundColor: ''
            },
            text: {
                style: {
                    color: '#000',
                    whiteSpace: 'nowrap',
                    position: 'absolute',
                    cursor: 'default',
                    transform: 'translateX(-50%)',
                    left: '50%',
                    top: '60%',
                    fontSize: '20px',
                    letterSpacing: '-1px',
                },
                autoStyleContainer: false,
            },
            step: function (state, circle) {
                circle.path.setAttribute('stroke', state.color);
                circle.path.setAttribute('stroke-width', state.width);

                var value = Math.round(circle.value() * 100);
                if (value === 0) {
                    circle.setText('');
                } else {
                    circle.setText(value);
                }

            },
            from: {
                color: '#9f72fc',
                width: 5
            },
            to: {
                color: '#9f72fc',
                width: 5
            },
        });

        let dbbar = new ProgressBar.Circle(dbstat, {
            strokeWidth: 5,
            easing: 'easeInOut',
            duration: 1400,
            delay: 600,
            trailWidth: 0,
            svgStyle: {
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                backgroundColor: ''
            },
            text: {
                style: {
                    color: '#000',
                    whiteSpace: 'nowrap',
                    position: 'absolute',
                    cursor: 'default',
                    transform: 'translateX(-50%)',
                    left: '50%',
                    top: '60%',
                    fontSize: '20px',
                    letterSpacing: '-1px',
                },
                autoStyleContainer: false,
            },
            step: function (state, circle) {
                circle.path.setAttribute('stroke', state.color);
                circle.path.setAttribute('stroke-width', state.width);

                var value = Math.round(circle.value() * 100);
                if (value === 0) {
                    circle.setText('');
                } else {
                    circle.setText(value);
                }

            },
            from: {
                color: '#1b2955',
                width: 5
            },
            to: {
                color: '#1b2955',
                width: 5
            },
        });
        let phpbar = new ProgressBar.Circle(phpstat, {
            strokeWidth: 5,
            easing: 'easeInOut',
            duration: 1400,
            delay: 600,
            trailWidth: 0,
            svgStyle: {
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                backgroundColor: ''
            },
            text: {
                style: {
                    color: '#000',
                    whiteSpace: 'nowrap',
                    position: 'absolute',
                    cursor: 'default',
                    transform: 'translateX(-50%)',
                    left: '50%',
                    top: '60%',
                    fontSize: '20px',
                    letterSpacing: '-1px',
                },
                autoStyleContainer: false,
            },
            step: function (state, circle) {
                circle.path.setAttribute('stroke', state.color);
                circle.path.setAttribute('stroke-width', state.width);

                var value = Math.round(circle.value() * 100);
                if (value === 0) {
                    circle.setText('');
                } else {
                    circle.setText(value);
                }

            },
            from: {
                color: '#8b93bb',
                width: 5
            },
            to: {
                color: '#8b93bb',
                width: 5
            },
        });
        htmlbar.animate(0.97); // Number from 0.0 to 1.0
        cssbar.animate(0.97); // Number from 0.0 to 1.0
        jsbar.animate(0.9); // Number from 0.0 to 1.0
        vuebar.animate(0.75); // Number from 0.0 to 1.0
        gitbar.animate(0.70); // Number from 0.0 to 1.0
        bootbar.animate(0.70); // Number from 0.0 to 1.0
        dbbar.animate(0.40); // Number from 0.0 to 1.0
        phpbar.animate(0.20); // Number from 0.0 to 1.0
    };
    $.each($skill_box, function () {
        $(this).mousemove(function (e) {
            var offset = $(this).offset();
            $(this).find($skill_txtbox).css('left', `${Math.ceil(e.pageX - offset.left)}px`);
            $(this).find($skill_txtbox).css('top', `${Math.ceil(e.pageY - offset.top + 20)}px`);
        });
    })
    // MBTI 프로그레스 바 
    function mbti() {
        let e_bar = new ProgressBar.Line(e, {
            delay: 1000,
            strokeWidth: 4,
            easing: 'easeInOut',
            duration: 1400,
            color: '#FF651E',
            trailColor: '#eee',
            trailWidth: 4,
            svgStyle: {
                width: '100%',
                height: '100%',
                borderRadius: '4px',
            },
            text: {
                style: {
                    // Text color.
                    // Default: same as stroke color (options.color)
                    color: '#777',
                    position: 'absolute',
                    top: '-15px',
                    left: '50%',
                    padding: 0,
                    margin: 0,
                    transform: null
                },
                autoStyleContainer: false
            },
            step: (state, bar) => {
                bar.setText(100 - (Math.round(bar.value() * 100)) + ' %');
            }
        });
        let s_bar = new ProgressBar.Line(s, {
            delay: 1200,
            strokeWidth: 4,
            easing: 'easeInOut',
            duration: 1400,
            color: '#eee',
            trailColor: '#f0be25',
            trailWidth: 4,
            svgStyle: {
                width: '100%',
                height: '100%',
                borderRadius: '4px',
            },
            text: {
                style: {
                    // Text color.
                    // Default: same as stroke color (options.color)
                    color: '#777',
                    position: 'absolute',
                    left: '50%',
                    top: '-15px',
                    padding: 0,
                    margin: 0,
                    transform: null
                },
                autoStyleContainer: false
            },
            step: (state, bar) => {
                bar.setText(100 - (Math.round(bar.value() * 100)) + ' %');
            }
        });
        let f_bar = new ProgressBar.Line(f, {
            delay: 1400,
            strokeWidth: 4,
            easing: 'easeInOut',
            duration: 1400,
            color: '#eee',
            trailColor: '#00c180',
            trailWidth: 4,
            svgStyle: {
                width: '100%',
                height: '100%',
                borderRadius: '4px',
            },
            text: {
                style: {
                    // Text color.
                    // Default: same as stroke color (options.color)
                    color: '#777',
                    position: 'absolute',
                    left: '50%',
                    top: '-15px',
                    padding: 0,
                    margin: 0,
                    transform: null
                },
                autoStyleContainer: false
            },
            step: (state, bar) => {
                bar.setText(100 - (Math.round(bar.value() * 100)) + ' %');
            }
        });
        let p_bar = new ProgressBar.Line(p, {
            delay: 1600,
            strokeWidth: 4,
            easing: 'easeInOut',
            duration: 1400,
            color: '#eee',
            trailColor: '#7d50f9',
            trailWidth: 4,
            svgStyle: {
                width: '100%',
                height: '100%',
                borderRadius: '4px',
            },
            text: {
                style: {
                    // Text color.
                    // Default: same as stroke color (options.color)
                    color: '#777',
                    position: 'absolute',
                    left: '50%',
                    top: '-15px',
                    padding: 0,
                    margin: 0,
                    transform: null
                },
                autoStyleContainer: false
            },
            step: (state, bar) => {
                bar.setText(100 - (Math.round(bar.value() * 100)) + ' %');
            }
        });
        let t_bar = new ProgressBar.Line(t, {
            delay: 1600,
            strokeWidth: 2,
            easing: 'easeInOut',
            duration: 1400,
            color: '#eee',
            trailColor: '#303033',
            trailWidth: 2,
            svgStyle: {
                width: '100%',
                height: '100%',
                borderRadius: '4px',
            },
            text: {
                style: {
                    // Text color.
                    // Default: same as stroke color (options.color)
                    color: '#777',
                    position: 'absolute',
                    left: '50%',
                    top: '-15px',
                    padding: 0,
                    margin: 0,
                    transform: null
                },
                autoStyleContainer: false
            },
            step: (state, bar) => {
                bar.setText(100 - (Math.round(bar.value() * 100)) + ' %');
            }
        });
        e_bar.animate(0.75);
        s_bar.set(1);
        s_bar.animate(0.46);
        f_bar.set(1);
        f_bar.animate(0.31);
        p_bar.set(1);
        p_bar.animate(0.25);
        t_bar.set(1);
        t_bar.animate(0.49);
    }



    // 리사이징
    $(window).resize(function () {
        wrap();
        $wrap_slide.eq(0).addClass('wrap-active');
        modal();
        $header.fadeIn(300);
    }).resize();
    wrap();
    contact();
    $sticker_img.rotate(0);
})