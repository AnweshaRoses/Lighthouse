let controller = new ScrollMagic.Controller();
let timeline = new TimelineMax();

timeline
    .to('.cloud', 3, {y: -300})
    .to('.moon', 3, {y: 100}, '-=3')
    .to('.lighthouse', 3, { x:100 }, '-=3')
    .to('.lake', 3, { y:-280 }, '-=3')
    .to('.bird', 3, {y: -300}, '-=3')
    .to('.content', 3, {top: '0%'}, '-=3')
  



    

    let scene = new ScrollMagic.Scene({
        triggerElement: "section",
        duration: "450%",
        triggerHook: 0, //triggered as soon as you start scrolling, 1 for triggering when u reach the end//
    })
        .setTween(timeline)
        .setPin("section")
        .addTo(controller);

