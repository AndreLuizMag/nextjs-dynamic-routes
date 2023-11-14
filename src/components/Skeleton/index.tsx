import React, { FC, HTMLAttributes } from 'react'
import styles from './styles.module.css'

interface SkeletonProps
	extends HTMLAttributes<HTMLDivElement> {
	width?: string
	height?: string
}

export const Skeleton: FC<SkeletonProps> = ({
	width = '1rem',
	height = '1rem',
}) => {
	return (
		<div
			className={`${styles.skeleton}`}
			style={{ width: width, height: height }}
		/>
	)
}
