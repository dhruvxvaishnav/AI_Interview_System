import { Button } from "@/components/ui/button";
import { dummyInterviews } from "@/constant";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import InterviewCard from "@/components/InterviewCard";

const Page = () => {
  return (
    <>
      <section className="card-cta">
        <div className="flex flex-col gap-6 max-w-lg">
          <h2>Get Interview Ready With AI Powered Practice & Feedback</h2>
          <p className="text-lg">
            Practice on Real Interview Questions & Get Instant Feedback
          </p>
          <Button asChild className="btn-primary max-sm:w-full">
            <Link href="/interview">Start An Interview</Link>
          </Button>
        </div>
        <Image
          src="/robot.png"
          alt="robot-dude"
          width={400}
          height={400}
          className="max-sm:hidden"
        />
      </section>
      <section className="flex flex-col mt-8 gap-6">
        <h2>Your Interviews</h2>
        <div className="interviews-section">
          {dummyInterviews.map((interview) => (
            <InterviewCard {...interview} />
          ))}
        </div>
      </section>
      <section className="flex flex-col gap-6 mt-8">
        <h2>Take An Interview</h2>
        <div className="interviews-section">
          {dummyInterviews.map((interview) => (
            <InterviewCard {...interview} />
          ))}
          {/* <p>You Haven't Taken Any Interview Yet</p> */}
        </div>
      </section>
    </>
  );
};

export default Page;
