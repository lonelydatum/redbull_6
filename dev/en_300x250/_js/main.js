import {read, size, frameEnd, init} from '../../_common/js/common.js'
import {player} from '../../_common/js/striker.js'


function start(){
	
	const tl = init("160x600")
	const time = .2
	TweenLite.defaultEase = Power3.easeInOut

	tl.to("#holder", time, {x:"-=300"}, "+=.2")
	tl.to("#holder", time, {x:"-=300"}, "+=2")
	tl.to("#holder", time, {x:"-=300"}, "+=4")
	
	

}


start()


module.exports = {};

