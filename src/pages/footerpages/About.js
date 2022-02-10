import React from "react";
import "./About.css";
import Nori from "../../componants/images/Nori.jpg";
import Sori from "../../componants/images/Sori.jpg";
import Drmoon from "../../componants/images/Drmoon.jpg";
import Mizgold from "../../componants/images/Mizgold.jpg";
import Queensy from "../../componants/images/Queensy.jpg";
import Redbilly from "../../componants/images/Redbilly.jpg";

const About = () => {
	return (
		<div className="about-container">
			<h1> Who we are?</h1>
			<ul class="cards">
				<li>
					<a href="/" class="card">
						<img src={Redbilly} class="card__image" alt="" />
						<div class="card__overlay">
							<div class="card__header">
								<svg
									class="card__arc"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path />
								</svg>
								<img
									class="card__thumb"
									src="https://i.imgur.com/7D7I6dI.png"
									alt=""
								/>
								<div class="card__header-text">
									<h3 class="card__title">Redbilly</h3>
									<span class="card__status">Cheers!</span>
								</div>
							</div>
							<p class="card__description">
								Chief editor & Sound!
							</p>
						</div>
					</a>
				</li>
				<li>
					<a href="/" class="card">
						<img src={Sori} class="card__image" alt="" />
						<div class="card__overlay">
							<div class="card__header">
								<svg
									class="card__arc"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path />
								</svg>
								<img
									class="card__thumb"
									src="https://i.imgur.com/sjLMNDM.png"
									alt=""
								/>
								<div class="card__header-text">
									<h3 class="card__title">Sori</h3>
									<span class="card__status">Voila!</span>
								</div>
							</div>
							<p class="card__description">Managing & Social</p>
						</div>
					</a>
				</li>
				<li>
					<a href="/" class="card">
						<img src={Drmoon} class="card__image" alt="" />
						<div class="card__overlay">
							<div class="card__header">
								<svg
									class="card__arc"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path />
								</svg>
								<img
									class="card__thumb"
									src="https://i.imgur.com/7D7I6dI.png"
									alt=""
								/>
								<div class="card__header-text">
									<h3 class="card__title">Dr. Moon</h3>
									<span class="card__status">Power!</span>
								</div>
							</div>
							<p class="card__description">
								Attorney & Columnist
							</p>
						</div>
					</a>
				</li>
				<li>
					<a href="/" class="card">
						<img src={Mizgold} class="card__image" alt="" />
						<div class="card__overlay">
							<div class="card__header">
								<svg
									class="card__arc"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path />
								</svg>
								<img
									class="card__thumb"
									src="https://i.imgur.com/sjLMNDM.png"
									alt=""
								/>
								<div class="card__header-text">
									<h3 class="card__title">Miz Gold</h3>
									<span class="card__status">Charm!</span>
								</div>
							</div>
							<p class="card__description">
								Chief Reporter & Socia
							</p>
						</div>
					</a>
				</li>
				<li>
					<a href="/" class="card">
						<img src={Queensy} class="card__image" alt="" />
						<div class="card__overlay">
							<div class="card__header">
								<svg
									class="card__arc"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path />
								</svg>
								<img
									class="card__thumb"
									src="https://i.imgur.com/sjLMNDM.png"
									alt=""
								/>
								<div class="card__header-text">
									<h3 class="card__title">Queensy</h3>
									<span class="card__status">Ahoi!</span>
								</div>
							</div>
							<p class="card__description">Beats & Groove</p>
						</div>
					</a>
				</li>
				<li>
					<a href="/" class="card">
						<img src={Nori} class="card__image" alt="" />
						<div class="card__overlay">
							<div class="card__header">
								<svg
									class="card__arc"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path />
								</svg>
								<img
									class="card__thumb"
									src="https://i.imgur.com/sjLMNDM.png"
									alt=""
								/>
								<div class="card__header-text">
									<h3 class="card__title">Nori</h3>
									<span class="card__status">Groovy!</span>
								</div>
							</div>
							<p class="card__description">Voice & Music</p>
						</div>
					</a>
				</li>
			</ul>
		</div>
	);
};

export default About;
