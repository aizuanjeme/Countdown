import React from "react";
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
        <div class="pb-5 py-md-5">
		<div class="container">
			<div class="row">
				<div class="col-lg-9 col-md-8 col-12">
					{/* <!-- Card --> */}
					<div class="card">
						{/* <!-- Card header --> */}
						{/* <div class="card-header">
							<h3 class="mb-0">Outlet Details</h3>
							<p class="mb-0">
								You have full control to manage your own account setting.
							</p>
						</div> --> */}
						{/* <!-- Card body --> */}
						<div class="card-body">
							<Link  to={`/event/create`}><h4 class="mb-0">Basic Details</h4></Link>
							{/* <!-- <p class="mb-1">
								Edit your personal information and address.
							</p> --> */}
							<hr class="my-3" />
							<div>
								{/* <!-- Form --> */}
								<form class="form-row">
									{/* <!-- Account id --> */}
									<div class="form-group col-12 col-md-6">
										<h5>Account ID:</h5>
										<p>Emzor Pharmaceutical Limited hfiughlzhgaz</p>
									</div>
									{/* <!-- Outlet name --> */}
									<div class="form-group col-12 col-md-6">
										<h5>Outlet Name:</h5>
										<p>Egbeda Branch</p>
									</div>
									{/* <!-- PCN --> */}
									<div class="form-group col-12 col-md-12">
										<h5>PCN No.:</h5>
											<p>467779689758
												<span class="badge badge-success p-2">Verified<i class="fa fa-check-circle ml-1"></i></span>
												<span class="badge badge-warning p-2 text-light">Not Verified<i class="fa fa-exclamation-circle ml-1"></i></span>
											</p>
									</div>
									{/* <!-- Opening time --> */}
									<div class="form-group col-12 col-md-6">
										<h5>Opening Time:</h5>
										<p>8.00AM</p>
									</div>
									{/* <!-- Closing time --> */}
									<div class="form-group col-12 col-md-6">
										<h5>Closing Time:</h5>
										<p>5.00PM</p>
									</div>
								</form>
							</div>
						</div>
					</div>

					<div class="card mt-3">
						{/* <!-- Card body --> */}
						<div class="card-body">
							<h4 class="mb-0">Location Details</h4>
							<hr class="my-3" />
							<div>
								{/* <!-- Form --> */}
								<form class="form-row">
									{/* <!-- Address --> */}
									<div class="form-group col-12">
										<h5>Address:</h5>
										<p>Plot 30A, 122RD 1ST Avenue, Gowon Estate, Ipaja, Lagos.</p>
									</div>
									{/* <!-- Country --> */}
									<div class="form-group col-12 col-md-6">
										<h5>Country:</h5>
										<p>Nigeria</p>
									</div>
									{/* <!-- State --> */}
									<div class="form-group col-12 col-md-6">
										<h5>State:</h5>
										<p>Lagos</p>
									</div>
									{/* <!-- Lga --> */}
									<div class="form-group col-12 col-md-6">
										<h5>LGA:</h5>
										<p>Alimosho</p>
									</div>
									{/* <!-- City --> */}
									<div class="form-group col-12 col-md-6">
										<h5>City:</h5>
										<p>Lagos</p>
									</div>
									{/* <!-- Longitude --> */}
									<div class="form-group col-12 col-md-6">
										<h5>Longitude:</h5>
										<p>9.4759765</p>
									</div>
									{/* <!-- Latitude --> */}
									<div class="form-group col-12 col-md-6">
										<h5>Latitude:</h5>
										<p>2.6876596</p>
									</div>
								</form>
							</div>
						</div>
					</div>

					<div class="card mt-3">
						{/* <!-- Card body --> */}
						<div class="card-body">
							<h4 class="mb-0">Contact Details</h4>
							<hr class="my-3" />
							<div>
								{/* <!-- Form --> */}
								<form class="form-row">
									{/* <!-- First name --> */}
									<div class="form-group col-12 col-md-6">
										<h5>ContactPerson Name:</h5>
										<p>Michael Coker</p>
									</div>
									{/* <!-- Phone --> */}
									<div class="form-group col-12 col-md-6">
										<h5>ContactPerson Phone:</h5>
										<p>+2348056940023</p>
									</div>
									{/* <!-- Email --> */}
									<div class="form-group col-12 col-md-6">
										<h5>ContactPerson Email:</h5>
										<p>michaelcoker@gmail.com</p>
									</div>
									<div class="col-12">
									</div>
								</form>
							</div>
						</div>
					</div>

				</div>
			</div>
		</div>
	</div>

	{/* // <!-- Footer --> */}

	<div class="footer">
		<div class="container">
			<div class="row align-items-center no-gutters border-top py-2">
				{/* <!-- Desc --> */}
				<div class="col-md-6 col-12">
					<span>© 2021 PharmaKonnect. All Rights Reserved.</span>
				</div>
				{/* <!-- Links --> */}
				<div class="col-12 col-md-6">
					<nav class="nav justify-content-center justify-content-md-end">
						<a class="nav-link active pl-0" href="#!">Privacy</a>
						<a class="nav-link" href="#!">Terms </a>
						<a class="nav-link" href="#!">Feedback</a>
						<a class="nav-link" href="#!">Support</a>
					</nav>
				</div>
			</div>
		</div>
	</div>
</div>
    );
}

export default Home;