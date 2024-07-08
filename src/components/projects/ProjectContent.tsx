import { FiArrowUpRight } from "react-icons/fi"
import TechnoList, { TechnoListItem } from "../container/degree/TechnoList"

type ProjectContentProps = {
	title: string
	firstParagraph: string
	secondParagraph: string
	technoList: TechnoListItem[]
}

const ProjectContent = (props: ProjectContentProps) => {
	const { title, firstParagraph, secondParagraph, technoList } = props
	return (
		<div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
			<div className="col-span-1  md:col-span-4">
				<h2 className="text-3xl font-bold">{title}</h2>
				<div
					style={{
						width: "fit-content",
            marginTop: "1rem",
					}}
				>
					<h4
						className="font-bold"
						style={{
							paddingLeft: "1rem",
						}}
					>
						Techno:
					</h4>
					<TechnoList technoList={technoList} />
				</div>
			</div>
			<div className="col-span-1 md:col-span-8">
				<p
					className="mb-4"
					style={{
						fontWeight: "normal",
					}}
				>
					{firstParagraph}
				</p>
				<p
					className="mb-8"
					style={{
						fontWeight: "normal",
					}}
				>
					{secondParagraph}
				</p>
				{/* <button className="w-full rounded bg-neutral-900 px-9 py-4 text-xl text-white transition-colors hover:bg-neutral-700 md:w-fit">
					Learn more <FiArrowUpRight className="inline" />
				</button> */}
			</div>
		</div>
	)
}

export default ProjectContent
