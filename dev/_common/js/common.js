const banner = document.getElementById('banner')
const size = {w:banner.offsetWidth, h:banner.offsetHeight}


const speed = .2
const F1 = 1.7
const F2 = 2.5

function init(id){

	const list = [".t1", ".t2", ".t3"]
	list.map((item, i)=>{
		TweenLite.set(item, {x:i*size.w})
	})

	TweenLite.set("#holder", {x:size.w})
	TweenLite.set(".bg", {x:`-${size.w/2}`, y:`-${size.h/2}`})


	TweenLite.defaultEase = Power3.easeOut
	const tl = new TimelineMax()
	tl.set(".frame1", {opacity:1})

	
	const {w, h} = size

	const time = speed
	TweenLite.defaultEase = Power3.easeInOut
	tl.from(".bg", .4, {scale:.7, opacity:0, ease:Power4.easeOut}, "+=.1")
	const x = `-=${size.w}`
	tl.to("#holder", time, {x}, "+=.1")
	tl.to("#holder", time, {x}, `+=${F1}`)
	tl.to("#holder", time, {x}, `+=${F2}`)
	
	return tl
}



function size728(){

	const WIDTH = 320

	const list = [".t1", ".t2", ".t3"]
	list.map((item, i)=>{
		TweenLite.set(item, {x:i*WIDTH})
	})

	TweenLite.set("#holder", {x:WIDTH})
	TweenLite.set(".bg", {x:`-${size.w/2}`, y:`-${size.h/2}`})


	TweenLite.defaultEase = Power3.easeOut
	const tl = new TimelineMax()
	tl.set(".frame1", {opacity:1})

	
	const {w, h} = size

	const time = speed
	TweenLite.defaultEase = Power3.easeInOut
	tl.from(".bg", .4, {scale:.7, opacity:0, ease:Power4.easeOut}, "+=.1")
	const x = `-=${WIDTH}`
	tl.to("#holder", time, {x}, "+=.1")
	tl.to("#holder", time, {x}, `+=${F1}`)
	tl.to("#holder", time, {x}, `+=${F2}`)
	
	return tl
}

function size320(){
	const WIDTH = 140

	const list = [".t1", ".t2", ".t3"]
	list.map((item, i)=>{
		TweenLite.set(item, {x:i*WIDTH})
	})

	TweenLite.set("#holder", {x:WIDTH})
	TweenLite.set(".bg", {x:`-${size.w/2}`, y:`-${size.h/2}`})


	TweenLite.defaultEase = Power3.easeOut
	const tl = new TimelineMax()
	tl.set(".frame1", {opacity:1})

	
	const {w, h} = size

	const time = speed
	TweenLite.defaultEase = Power3.easeInOut
	tl.from(".bg", .4, {scale:.7, opacity:0, ease:Power4.easeOut}, "+=.1")
	const x = `-=${WIDTH}`
	tl.to("#holder", time, {x}, "+=.1")
	tl.to("#holder", time, {x}, `+=${F1}`)
	tl.to("#holder", time, {x}, `+=${F2}`)
	
}

export {size, init, size320, size728}
// export {init}