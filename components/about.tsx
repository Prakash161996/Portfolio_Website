"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import SkillsSection from "@/components/skills-section";

export default function About() {
  return (
    <>
      <section id="about" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">About Me</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              I'm a passionate Front-End Developer with 2+ years of experience
              in building responsive, accessible, and high-performance web
              applications.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold mb-4">My Journey</h3>
              <p className="text-muted-foreground mb-4">
                I began my journey as a Front-End Developer in 2023,
                specializing in crafting responsive, accessible, and
                high-performance web applications. With a strong focus on user
                experience and interface optimization, I have contributed to
                developing feature-rich and scalable web applications for
                diverse industries.
              </p>
              <p className="text-muted-foreground">
                My expertise lies in building dynamic and interactive user
                interfaces, enhancing website performance, and ensuring
                cross-browser compatibility. I am committed to writing clean,
                maintainable code and continuously refining my skills to align
                with modern web development standards.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold mb-4">
                Education & Experience
              </h3>
              <Card className="mb-4">
                <CardContent className="pt-6">
                  <h4 className="font-bold">Frontend Developer</h4>
                  <p className="text-sm text-muted-foreground">
                    Floworx | Jan 2023 - Feb 2025
                  </p>
                </CardContent>
              </Card>
              <Card className="mb-4">
                <CardContent className="pt-6">
                  <h4 className="font-bold">Front-End Development Course</h4>
                  <p className="text-sm text-muted-foreground">
                    Coding Ninjas | Mar 2022 - Oct 2022
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <h4 className="font-bold">Bachelor of Engineering</h4>
                  <p className="text-sm text-muted-foreground">
                    GD Rungta College of Engineering and Technology Bhilai |
                    2015 - 2019
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      <SkillsSection />
    </>
  );
}
