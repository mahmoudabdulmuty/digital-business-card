export default function Info() {
	return (
		<div className='info'>
			<div className='img-box'>
				<img src='./img/person.png' alt='person' />
			</div>
			<h1>Mahmoud Abdulmuty</h1>
			<p>Frontend Developer</p>
			<p>mahmoudabdulmuty@gmail.com</p>
			<div class='buttons'>
				<a
					target='_blank'
					rel='noreferrer'
					href='mailto:mahmoudabdulmuty@gmail.com'
					className='btn email'
				>
					<i className='fas fa-envelope icon'></i>
					<span>Email</span>
				</a>
				<a
					target='_blank'
					rel='noreferrer'
					href='https://www.linkedin.com/in/mahmoudabdulmuty/'
					className='btn linkedin'
				>
					<i className='fab fa-linkedin icon'></i>
					<span>LinkedIn</span>
				</a>
			</div>
		</div>
	);
}
