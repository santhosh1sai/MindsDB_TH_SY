import React from 'react'

import { FormWrapper } from '../form_wrapper/formWrapper';
import { ProductWrapper } from '../product_wrapper/productWrapper';

import MindsDb from '../../images/mindsdb.png';
import MindsDbHover from '../../images/mindsdb-hover.png';
import Bracket from '../../images/bracket.png';
import BracketHover from '../../images/bracket-hover.png';
import Robot from '../../images/robot.png';
import RobotHover from '../../images/robot-hover.png';
import Search from '../../images/search.png';
import SearchHover from '../../images/search-hover.png';

import { useSelector } from 'react-redux';

export function Home() {
	const page = useSelector((state) => state.home.page)

	return (
		<div class="page-wrapper">
			{/* sidebar start */}
			<div class="sidebar">
				<div class="sidebar-block">
					<img src={MindsDb} alt="mindsdb" class="sidebar-image" />
					<img src={MindsDbHover} alt="mindsdb-hover" class="sidebar-image-hover" />
				</div>
				<div class="sidebar-block">
					<img src={Bracket} alt="" class="sidebar-image" />
					<img src={BracketHover} alt="" class="sidebar-image-hover" />
				</div>
				<div class="sidebar-block">
					<img src={Robot} alt="robot" class="sidebar-image" />
					<img src={RobotHover} alt="robot" class="sidebar-image-hover" />
				</div>
				<div class="sidebar-block">
					<img src={Search} alt="robot" class="sidebar-image" />
					<img src={SearchHover} alt="robot" class="sidebar-image-hover" />
				</div>
			</div>
			{/* sidebar end */}
			{/* dashboard start */}
			<div class="dashboard-wrapper">
				{/* breadcrumb start */}
				<div class="breadcrumb">
					<i class="icon-breadcrumb"></i>
					<h2>ChatProject</h2>
					<i class="icon-seprate"></i>
					<h2>Add datasource</h2>
				</div>
				{/* breadcrumb end */}
				{page === 0 ? <ProductWrapper /> : <FormWrapper />}
			</div>
			{/* dashboard end */}
		</div>
	)
}