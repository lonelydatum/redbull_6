import {size} from '../../_common/js/common.js'






function init(id){

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

	const time = .2
	TweenLite.defaultEase = Power3.easeInOut
	tl.from(".bg", .4, {scale:.7, opacity:0, ease:Power4.easeOut}, "+=.1")
	const x = `-=${WIDTH}`
	tl.to("#holder", time, {x}, "+=.1")
	tl.to("#holder", time, {x}, "+=2")
	tl.to("#holder", time, {x}, "+=4")
	
	return tl
}


init()


module.exports = {};

