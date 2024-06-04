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

function debounce<T extends unknown[], U>(
  callback: (...args: T) => PromiseLike<U> | U,
  wait: number
) {
  let state:
    | undefined
    | {
        timeout: ReturnType<typeof setTimeout>
        promise: Promise<U>
        resolve: (value: U | PromiseLike<U>) => void
        reject: (value: any) => void
        latestArgs: T
      } = undefined

  return (...args: T): Promise<U> => {
    if (!state) {
      state = {} as any
      state!.promise = new Promise((resolve, reject) => {
        state!.resolve = resolve
        state!.reject = reject
      })
    }
    clearTimeout(state!.timeout)
    state!.latestArgs = args
    state!.timeout = setTimeout(() => {
      const s = state!
      state = undefined
      try {
        s.resolve(callback(...s.latestArgs))
      } catch (e) {
        s.reject(e)
      }
    }, wait)

    return state!.promise
  }
}



export {
  getRelativeCoordinates,
  EMPTY_POSITION,
  debounce
}