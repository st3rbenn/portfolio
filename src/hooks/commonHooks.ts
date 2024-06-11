import { useRef, useCallback, useState } from "react"

export type Position = {
	x: number
	y: number
	width: number
	height: number
	centerX: number
	centerY: number
}

const EMPTY_POSITION: Position = {
	x: 0,
	y: 0,
	width: 0,
	height: 0,
	centerX: 0,
	centerY: 0,
}

const getRelativeCoordinates = (event: MouseEvent, referenceElement: any) => {
	const position = {
		x: event.pageX,
		y: event.pageY,
	}

	const offset = {
		left: referenceElement.offsetLeft,
		top: referenceElement.offsetTop,
		width: referenceElement.clientWidth,
		height: referenceElement.clientHeight,
	}

	let reference = referenceElement.offsetParent

	while (reference) {
		offset.left += reference.offsetLeft
		offset.top += reference.offsetTop
		reference = reference.offsetParent
	}

	return {
		x: position.x - offset.left,
		y: position.y - offset.top,
		width: offset.width,
		height: offset.height,
		centerX: (position.x - offset.left - offset.width / 2) / (offset.width / 2),
		centerY:
			(position.y - offset.top - offset.height / 2) / (offset.height / 2),
	}
}

function useDebounce<T extends (...args: any[]) => any>(
	callback: T,
	delay: number
): T {
	// Utilisation de useRef pour conserver la même référence d'instance de la fonction
	const params = useRef<{
		timeout: NodeJS.Timeout | null
		args: IArguments[] | null
	}>({
		timeout: null,
		args: null,
	})

	const debouncedFunction = useCallback(
		(...args: any[]) => {
			if (params.current.timeout) {
				clearTimeout(params.current.timeout)
			}

			params.current.args = args

			params.current.timeout = setTimeout(() => {
				if (params.current.args) {
					callback(...(params.current.args as any[]))
				}
			}, delay)
		},
		[delay, callback]
	) as T

	return debouncedFunction
}

function useThrottle(callback: (...args: any[]) => any, delay: number) {
	const [isAllowed, setIsAllowed] = useState(true)

	const throttledFunction = useCallback(
		(...args: any[]) => {
			if (isAllowed) {
				callback(...args)
				setIsAllowed(false)
				setTimeout(() => setIsAllowed(true), delay)
			}
		},
		[isAllowed, delay, callback]
	)

	return throttledFunction
}

export { getRelativeCoordinates, EMPTY_POSITION, useDebounce, useThrottle }
