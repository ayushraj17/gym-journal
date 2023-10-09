"use client";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronRightIcon } from "@radix-ui/react-icons";
import React from "react";
import { BarChart, Bar, ResponsiveContainer } from "recharts";

const data = [
	{
		name: "Page A",
		uv: 4000,
		pv: 2400,
		amt: 2400,
	},
	{
		name: "Page B",
		uv: 3000,
		pv: 1398,
		amt: 2210,
	},
	{
		name: "Page C",
		uv: 2000,
		pv: 9800,
		amt: 2290,
	},
	{
		name: "Page D",
		uv: 2780,
		pv: 3908,
		amt: 2000,
	},
	{
		name: "Page E",
		uv: 1890,
		pv: 4800,
		amt: 2181,
	},
	{
		name: "Page F",
		uv: 2390,
		pv: 3800,
		amt: 2500,
	},
	{
		name: "Page G",
		uv: 3490,
		pv: 4300,
		amt: 2100,
	},
];

const userWorkouts = [
	"Push",
	"Pull",
	"Leg",
	"Push 1",
	"Push 2",
	"Leg 3",
	"Chest",
	"Back",
	"Arms",
];
const Page = () => {
	return (
		<div className="flex flex-col w-full gap-10 px-4 mb-20">
			<Card className="mt-4">
				<CardHeader>
					<CardTitle>
						<span>Todays workout</span>
					</CardTitle>
					<CardDescription>Push Day, last completed thursday</CardDescription>
					{/* <CardDescription>98kg</CardDescription> */}
				</CardHeader>
				<CardContent>
					<Button>Start Workout</Button>
				</CardContent>
			</Card>
			<div>
				<h6 className="px-1 mb-5 font-semibold leading-none tracking-tight">
					Your Workouts
				</h6>
				<div className="flex flex-col gap-4">
					{userWorkouts.map((item) => (
						<Card key={item}>
							<CardHeader>
								<CardTitle className="flex items-center justify-between">
									{item}
									<Button variant="outline" size="icon">
										<ChevronRightIcon className="w-6 h-6" />
									</Button>
								</CardTitle>
							</CardHeader>
						</Card>
					))}
				</div>
			</div>

			<Card>
				<CardHeader>
					<CardTitle className="flex items-center justify-between">
						Performance in volume
						<DropdownMenu>
							<DropdownMenuTrigger>
								<Button variant="ghost" size="sm">
									All
								</Button>
							</DropdownMenuTrigger>
							<DropdownMenuContent className="overflow-y-auto max-h-56">
								{userWorkouts.map((item) => (
									<DropdownMenuItem key={item}>{item}</DropdownMenuItem>
								))}
							</DropdownMenuContent>
						</DropdownMenu>
					</CardTitle>
					{/* <div className="text-2xl font-bold">+2350</div> */}
					<CardDescription>+230kg from last leg workout</CardDescription>
				</CardHeader>
				<CardContent>
					<ResponsiveContainer width="100%" height={200}>
						<BarChart width={150} height={40} data={data}>
							<Bar dataKey="uv" fill="rgb(193,79,0)" />
						</BarChart>
					</ResponsiveContainer>
				</CardContent>
			</Card>
		</div>
	);
};

export default Page;
