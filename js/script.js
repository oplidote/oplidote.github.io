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
    let $gotop = $('.gotop');
    $gotop.click(function () {
        wrap_swiper.slideTo(0, 500);
        $bg.css('transform', 'translateY(0)');
    })

    // 변수
    let $sticker2_img = $('.sticker2 img');
    let $bg = $('.bg');
    let $field = $('.field');
    let prevIndex = 0; // 이전 슬라이드번호
    let $header = $('.header');
    let $swiper_wrapper = $('.swiper-wrapper');
    let $wrap_slide = $('.wrap-slide');

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
    let menu = ['HOME', 'ABOUT', 'PROJECT', 'SKILL', 'MBTI', 'CONTACT']
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
                pagination: {
                    el: ".page-box",
                    clickable: true,
                    renderBullet: function (index, className) {
                        return '<span class="' + className + '">' +
                            '<span class="page-txt">' +
                            (menu[index]) + '</span></span>';
                    },
                },
                on: {
                    slideChange: function () {
                        let innerAngle = (this.realIndex - prevIndex) * 60;
                        if (this.realIndex != 0) {

                        }
                        $('.page-box').rotate(-innerAngle);
                        $('.page-txt').each(function (index, item) {
                            $(this).rotate(innerAngle - (60 * index));
                        });
                        $sticker2_img.rotate(innerAngle);
                        $sticker2_img.eq(0).rotate(-innerAngle);
                        $sticker2_img.eq(2).rotate(-innerAngle);
                        $('.wrap-slide').removeClass('wrap-active');
                        $('.wrap-slide').eq(this.realIndex).addClass('wrap-active');

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
                        } else if (this.realIndex == 5) {
                            $header.fadeOut(300);
                            $bg.css('transform', 'scale(8)');
                        } else if (this.realIndex != 5) {
                            $header.fadeIn(300);
                            $bg.css('transform', 'scale(.8)');
                        }
                    }
                }
            });
        } else if (window.innerWidth <= 1024) {
            if (window.innerWidth > 480) {

                // 마우스 휠 시
                $('.wrap').bind('mousewheel', function (e) {
                    let pos = parseInt($swiper_wrapper.offset().top);
                    $bg.css('transform', 'translateY(' + pos / 4 + 'px) scale(0.8)');
                })
            }

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
                        $('.wrap-slide').eq(this.realIndex).addClass('wrap-active');
                        let m_index4 = this.realIndex == 4 && window.innerWidth <= 480;
                        let index5 = this.realIndex == 5;
                        console.log(this.realIndex);
                        $gotop.toggleClass('white', index5 || m_index4);
                        if (this.realIndex != 0) {
                            $gotop.fadeIn(300);
                            $
                        } else if (this.realIndex == 0) {
                            $gotop.fadeOut(300);
                        }
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
                        if (this.realIndex == 5 && window.innerWidth > 480) {
                            $header.fadeOut(300);
                        }
                        if (this.realIndex != 5 && window.innerWidth > 480) {
                            $header.fadeIn(300);
                        }
                    }
                }

            });
        }
    }
    var profile_swiper = new Swiper(".profile-swiper", {
        effect: "fade",
        autoplay: {
            delay: 2000,
        },
        speed: 1000,
        spaceBetween: 20,
        loop: true,
        grabCursor: true,
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
    // 스킬 프로그레스 바 
    function stat() {
        let htmlbar = new ProgressBar.Line(htmlstat, {
            easing: 'easeInOut',
            duration: 1400,
            delay: 1200,
            color: '#FF651E',
            trailColor: '#eee',
            trailWidth: 1,
            svgStyle: {
                width: '100%',
                height: '100%',
                borderRadius: '3px'
            },
            text: {
                style: {
                    // Text color.
                    // Default: same as stroke color (options.color)
                    color: '#777',
                    position: 'absolute',
                    right: '-25px',
                    top: '-2px',
                    padding: 0,
                    margin: 0,
                    transform: null
                },
                autoStyleContainer: false
            },
            // from: {
            //     color: '#FFEA82'
            // },
            // to: {
            //     color: '#ED6A5A'
            // },
            step: (state, bar) => {
                bar.setText(Math.round(bar.value() * 100) + ' %');
            }
        });
        let cssbar = new ProgressBar.Line(cssstat, {
            easing: 'easeInOut',
            duration: 1300,
            delay: 1300,
            color: '#379ad6',
            trailColor: '#eee',
            trailWidth: 1,
            svgStyle: {
                width: '100%',
                height: '100%',
                borderRadius: '3px'
            },
            text: {
                style: {
                    // Text color.
                    // Default: same as stroke color (options.color)
                    color: '#777',
                    position: 'absolute',
                    right: '-25px',
                    top: '-2px',
                    padding: 0,
                    margin: 0,
                    transform: null
                },
                autoStyleContainer: false
            },
            step: (state, bar) => {
                bar.setText(Math.round(bar.value() * 100) + ' %');
            }
        });
        let jsbar = new ProgressBar.Line(jsstat, {
            easing: 'easeInOut',
            duration: 1400,
            delay: 1400,
            color: '#FFE100',
            trailColor: '#eee',
            trailWidth: 1,
            svgStyle: {
                width: '100%',
                height: '100%',
                borderRadius: '3px'
            },
            text: {
                style: {
                    // Text color.
                    // Default: same as stroke color (options.color)
                    color: '#777',
                    position: 'absolute',
                    right: '-25px',
                    top: '-2px',
                    padding: 0,
                    margin: 0,
                    transform: null
                },
                autoStyleContainer: false
            },
            step: (state, bar) => {
                bar.setText(Math.round(bar.value() * 100) + ' %');
            }
        });
        let jquerybar = new ProgressBar.Line(jquerystat, {
            easing: 'easeInOut',
            duration: 1400,
            delay: 1500,
            color: '#ed4646',
            trailColor: '#eee',
            trailWidth: 1,
            svgStyle: {
                width: '100%',
                height: '100%',
                borderRadius: '3px'
            },
            text: {
                style: {
                    // Text color.
                    // Default: same as stroke color (options.color)
                    color: '#777',
                    position: 'absolute',
                    right: '-25px',
                    top: '-2px',
                    padding: 0,
                    margin: 0,
                    transform: null
                },
                autoStyleContainer: false
            },
            step: (state, bar) => {
                bar.setText(Math.round(bar.value() * 100) + ' %');
            }
        });
        let vuebar = new ProgressBar.Line(vuestat, {
            easing: 'easeInOut',
            duration: 1400,
            delay: 1600,
            color: '#00c180',
            trailColor: '#eee',
            trailWidth: 1,
            svgStyle: {
                width: '100%',
                height: '100%',
                borderRadius: '3px'
            },
            text: {
                style: {
                    // Text color.
                    // Default: same as stroke color (options.color)
                    color: '#777',
                    position: 'absolute',
                    right: '-25px',
                    top: '-2px',
                    padding: 0,
                    margin: 0,
                    transform: null
                },
                autoStyleContainer: false
            },
            step: (state, bar) => {
                bar.setText(Math.round(bar.value() * 100) + ' %');
            }
        });
        let gitbar = new ProgressBar.Line(gitstat, {
            easing: 'easeInOut',
            duration: 1400,
            delay: 1600,
            color: '#1b1d21',
            trailColor: '#eee',
            trailWidth: 1,
            svgStyle: {
                width: '100%',
                height: '100%',
                borderRadius: '3px'
            },
            text: {
                style: {
                    // Text color.
                    // Default: same as stroke color (options.color)
                    color: '#777',
                    position: 'absolute',
                    right: '-25px',
                    top: '-2px',
                    padding: 0,
                    margin: 0,
                    transform: null
                },
                autoStyleContainer: false
            },
            step: (state, bar) => {
                bar.setText(Math.round(bar.value() * 100) + ' %');
            }
        });
        let bootbar = new ProgressBar.Line(bootstat, {
            easing: 'easeInOut',
            duration: 1400,
            delay: 1600,
            color: '#7d50f9',
            trailColor: '#eee',
            trailWidth: 1,
            svgStyle: {
                width: '100%',
                height: '100%',
                borderRadius: '3px'
            },
            text: {
                style: {
                    // Text color.
                    // Default: same as stroke color (options.color)
                    color: '#777',
                    position: 'absolute',
                    right: '-25px',
                    top: '-2px',
                    padding: 0,
                    margin: 0,
                    transform: null
                },
                autoStyleContainer: false
            },
            step: (state, bar) => {
                bar.setText(Math.round(bar.value() * 100) + ' %');
            }
        });
        let cbar = new ProgressBar.Line(cstat, {
            easing: 'easeInOut',
            duration: 1400,
            delay: 1600,
            color: '#4a8bc6',
            trailColor: '#eee',
            trailWidth: 1,
            svgStyle: {
                width: '100%',
                height: '100%',
                borderRadius: '3px'
            },
            text: {
                style: {
                    // Text color.
                    // Default: same as stroke color (options.color)
                    color: '#777',
                    position: 'absolute',
                    right: '-25px',
                    top: '-2px',
                    padding: 0,
                    margin: 0,
                    transform: null
                },
                autoStyleContainer: false
            },
            step: (state, bar) => {
                bar.setText(Math.round(bar.value() * 100) + ' %');
            }
        });
        let dbbar = new ProgressBar.Line(dbstat, {
            easing: 'easeInOut',
            duration: 1400,
            delay: 1600,
            color: '#1b2955',
            trailColor: '#eee',
            trailWidth: 1,
            svgStyle: {
                width: '100%',
                height: '100%',
                borderRadius: '3px'
            },
            text: {
                style: {
                    // Text color.
                    // Default: same as stroke color (options.color)
                    color: '#777',
                    position: 'absolute',
                    right: '-25px',
                    top: '-2px',
                    padding: 0,
                    margin: 0,
                    transform: null
                },
                autoStyleContainer: false
            },
            step: (state, bar) => {
                bar.setText(Math.round(bar.value() * 100) + ' %');
            }
        });
        let phpbar = new ProgressBar.Line(phpstat, {
            easing: 'easeInOut',
            duration: 1400,
            delay: 1600,
            color: '#8b93bb',
            trailColor: '#eee',
            trailWidth: 1,
            svgStyle: {
                width: '100%',
                height: '100%',
                borderRadius: '3px'
            },
            text: {
                style: {
                    // Text color.
                    // Default: same as stroke color (options.color)
                    color: '#777',
                    position: 'absolute',
                    right: '-25px',
                    top: '-2px',
                    padding: 0,
                    margin: 0,
                    transform: null
                },
                autoStyleContainer: false
            },
            step: (state, bar) => {
                bar.setText(Math.round(bar.value() * 100) + ' %');
            }
        });
        htmlbar.animate(0.97); // Number from 0.0 to 1.0
        cssbar.animate(0.97); // Number from 0.0 to 1.0
        jsbar.animate(0.9); // Number from 0.0 to 1.0
        jquerybar.animate(0.95); // Number from 0.0 to 1.0
        vuebar.animate(0.75); // Number from 0.0 to 1.0
        gitbar.animate(0.70); // Number from 0.0 to 1.0
        bootbar.animate(0.70); // Number from 0.0 to 1.0
        cbar.animate(0.50); // Number from 0.0 to 1.0
        dbbar.animate(0.40); // Number from 0.0 to 1.0
        phpbar.animate(0.20); // Number from 0.0 to 1.0
    };
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
                bar.setText(Math.round(bar.value() * 100) + ' %');
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
    $sticker2_img.rotate(0);
})