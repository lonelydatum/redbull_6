const banner = document.getElementById('banner')
const size = {w:banner.offsetWidth, h:banner.offsetHeight}
const read = {
	a:.5,
	b:2
}

const v2 = {
	a:0,
	b:2
}

TweenLite.defaultEase = Power2.easeInOut

function frameEnd(nudge){
	const tl = new TimelineMax()

	tl.set(".frame2", {opacity:1})
	tl.from(".bg2", .2, {opacity:0})

	
	tl.from(".phone", .3, {y:"+=200", opacity:0}, "+=.3")	
	tl.from(".ill", .3, {scale:0})

	tl.from(".t2", .01, { opacity:0}, "+=.3")
	tl.from(".cta1", .01, {opacity:0}, "+=2")
	tl.to(".cta1", .01, {opacity:0}, "+=2.5")

	// tl.add("end", {opacity:0}, "+=.2")
	tl.from(".cta2", .2, {opacity:0}, "+=.2")

	tl.from(".legal", .2, {opacity:0}, "+=.5")

	
	
	

	return tl
}



function init(id){
	console.log(id);
	TweenLite.defaultEase = Power3.easeOut
	const tl = new TimelineMax()
	tl.set(".frame1", {opacity:1})
	const {w, h} = size
	
	return tl
}

function olg_logo(){
	const time = 2
	

	const tl = new TimelineMax()
	tl.set("svg.olg_logo", {opacity:1})
	tl.set(".tri", {skewX:90, scaleY:0})
	tl.set(".item", {y:"+=100", opacity:0})

	tl.to(".tri", .3, {skewX:0, scaleY:1, ease:Circ.easeOut})

	tl.to(".item1", time, {y:0, opacity:1, ease:Elastic.easeOut}, .3)
	tl.to(".item2", time, {y:0, opacity:1, ease:Elastic.easeOut}, .6)
	tl.to(".item3", time, {y:0, opacity:1, ease:Elastic.easeOut}, .9)
	return tl
}

export {size, frameEnd, init, read, v2, olg_logo}
// export {init}