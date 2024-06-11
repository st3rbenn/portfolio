import React, { Dispatch, RefObject, SetStateAction } from "react"
import Header from "../components/container/header/Header"
import CustomCursor, { HandLandmarks } from "../components/cursor/CustomCursor"
import { Position } from "../hooks/commonHooks"
import { Outlet } from "react-router-dom"

type _layoutProps = {
	handLandmarks: HandLandmarks | undefined
	setHandLandmarks: Dispatch<SetStateAction<HandLandmarks | undefined>>
	mousePosition: Position
	setMousePosition: Dispatch<SetStateAction<Position>>
	isHandTrackerEnabled: boolean
	setIsHandTrackerEnabled: (isHandTrackerEnabled: boolean) => void
	setIsHandTrackerHovered: (isHandTrackerHovered: boolean) => void
	bodyRef: RefObject<HTMLDivElement>
}

const _layout = (props: _layoutProps) => {
	const {
		handLandmarks,
		setHandLandmarks,
		mousePosition,
		setMousePosition,
		isHandTrackerEnabled,
		setIsHandTrackerEnabled,
		setIsHandTrackerHovered,
		bodyRef,
	} = props
	return (
		<>
			<Header
				isHandTrackerEnabled={isHandTrackerEnabled}
				setIsHandTrackerEnabled={setIsHandTrackerEnabled}
				setIsHandTrackerHovered={setIsHandTrackerHovered}
			/>
			<CustomCursor
				handLandmarks={handLandmarks}
				setHandLandmarks={setHandLandmarks}
				mousePosition={mousePosition}
				setMousePosition={setMousePosition}
				isHandTrackerEnabled={isHandTrackerEnabled}
				bodyRef={bodyRef}
			/>
			<Outlet />
		</>
	)
}

export default _layout
