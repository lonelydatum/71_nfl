import {init, olg, textOn, read, h} from '../../_common/js/common.js'




function standard(){	
	const tl = init()	
	
	tl.add("playa")
	tl.from(".playa img", {duration:.5, x:-42, y:40, ease:Power4.easeOut}, "playa")
	tl.from(".ball", {duration:.5, x:50, y:-50, ease:Power4.easeOut}, "playa")
	tl.from(".t1", {...textOn()}, "playa+=.2")

	tl.to(".t1", {duration:.2, opacity:0}, `+=${read.t1}`)

	tl.from(".t2", {...textOn()}, "+=.1")
	tl.from(".bubble-1", {duration:.2, opacity:0}, "+=.2")
	tl.from(".bubble-2", {duration:.2, opacity:0})
	tl.from(".bubble-3", {duration:.2, opacity:0})
	tl.to(".t2", {duration:.2, opacity:0}, `+=${read.t2}`)
	tl.from(".t3", {...textOn()})
	tl.to([".t3", ".bubble", ".bet"], {duration:.2, opacity:0}, `+=${read.t3}`)
	tl.from(".tint", {duration:.5, ease:Power4.easeOut, y:-h, opacity:0})
	tl.from([".end-logos", ".end-legal"], {duration:.3, opacity:0}, "+=.2")

	tl.add("end")
	tl.to([".phone"], {duration:.2, scale:.55, x:-38, y:-30}, "end")
	tl.to([".playa"], {duration:.2, scale:1.1, x:-25, y:-1}, "end")
	tl.to([".ball"], {duration:.2, scale:.55, x:-38, y:-30}, "end")
	tl.to(".proline-small", {duration:.5, opacity:0}, "end")
	tl.from(".end-cta", {duration:.3, opacity:0}, "end")

	tl.add(olg())
	return tl
}

standard()