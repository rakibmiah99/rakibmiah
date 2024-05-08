<template>
    <UContainer>
        <Navbar/>
        <div class="py-5 space-y-4 text-gray-800">
            <div>
               <div class="flex justify-between items-center">
                    <div>
                        <h1 class="text-xl font-bold">MD Rakib Miah</h1>
                        <p class="font-semi-bold">Full Stack Web Developer</p>
                    </div>
                    <UButton class="h-[40px] px-5" to="https://drive.google.com/file/d/11hOkP7mBQx3uvbfwAqLiKo-nkBhOUbTL/view?usp=sharing" color="black">Download CV</UButton>
               </div>
                
                <div class="flex justify-between mt-3">
                    <ul class="max-w-md  space-y-1 list-disc list-inside dark:text-gray-400">
                        <li>
                            Biman Bandar, Dhaka, Bangladesh
                        </li>
                        <li>
                            (+880) 1732-691729
                        </li>
                        <li>
                            github.com/rakibmiah99 rakibmiah120199@gmail.com  
                        </li>
                        <li>
                            rakibmiah120199@gmail.com  
                        </li>
                        <li>
                            linkedin.com/in/rakibmiah99    
                        </li>
                    </ul>
                    <div class="image">
                        <img class="h-[150px] w-[120px] border" src="~/assets/my_image.jpg"/>
                    </div>
                </div>
            </div>

            <div class="experience">
                <h1 class="uppercase font-bold text-xl">experiences</h1>
                <UDivider class="mt-2"/>
                <div class=" space-y-4 mt-3">
                    <div v-for="item in experiences">
                        <div class="flex justify-between space-y-2 items-center">
                            <h3 class="font-bold text-md">{{item.compnay}}</h3>
                            <p>{{ item.date }}</p>
                        </div>
                        <p>{{ item.designation }}</p>
                        <p>{{ item.location }} <UBadge color="black" variant="outline" class="ml-2" :label="item.type"/></p>
                        <ul class="max-w-md mt-2  list-disc list-inside dark:text-gray-400">
                            <li v-for="project in item.projects">
                                {{ project }}
                            </li>
                        
                        </ul>
                    </div>
                </div>
            </div>

            <div class="educations pt-3">
                <h1 class="uppercase font-bold text-xl">educations</h1>
                <UDivider class="mt-2"/>
                <div class=" space-y-4 mt-3">
                    <div v-for="item in educations">
                        <div class="flex justify-between space-y-2 items-center">
                            <h3 class="font-bold text-md">{{item.university}}</h3>
                            <p>{{ item.date }}</p>
                        </div>
                        <p>{{ item.subject }}</p>
                    </div>
                </div>
            </div>

            <div class="courses pt-3">
                <h1 class="uppercase font-bold text-xl">courses</h1>
                <UDivider class="mt-2"/>
                <div class=" space-y-4 mt-3">
                    <div v-for="item in courses">
                        <div class="flex justify-between space-y-2 items-center">
                            <h3 class="font-bold text-md">{{item.institue}}</h3>
                            <!-- <p>{{ item.date }}</p> -->
                        </div>
                        <p>{{ item.subject }}</p>
                    </div>
                </div>
            </div>


            <div class="skills pt-3">
                <h1 class="uppercase font-bold text-xl">courses</h1>
                <UDivider class="mt-2"/>
                <div class=" space-y-4 mt-3">
                    <div v-for="item in skills">
                        <p>
                            <span class="font-bold">{{ item.title }} :</span>
                            <span>{{ item.topics }}</span>
                        </p>
                    </div>
                </div>
            </div>

        </div>
    </UContainer>
</template>

<script setup>
    const experiences = [
        {
            compnay: 'Tazamun Limited', 
            designation: 'Web Developer',
            date: 'May 2023 - Present',
            location: 'Makkah, Saudi Arabia',
            type: 'remote',
            projects: [
                'Contribution To a Hotel management system Project ',
                'B2B E-commerce application Restful API development'
            ]
        },
        {
            compnay: 'SEO Expate Bangladesh Limited', 
            designation: 'Full Stack Web Developer',
            date: 'Jun 2022 - Jul 2023',
            location: 'Bogura, Rajshahi, Bangladesh',
            type: 'In office',
            projects: [
                'Contribution to Student Management System Develop Restful Restful API, ',
                'B2C E-commerce Project',
                'Whats App Bulk SMS Send[Node Js, Express]',
                'Data Management Project'
            ]
        },
        {
            compnay: 'Step-up IT & Training Institute', 
            designation: 'Web Developer',
            date: 'March 2021 - Jul 2022',
            location: 'Rajshahi, Bangladesh',
            type: 'remote',
            projects: [
                'Design And API Integration News Portal Application',
                'Contribution Ecommerce Admin ',
                'Contribution to Bug Finding & Fixing '
            ]
        },
        {
            compnay: 'ICT Computer Training Center', 
            designation: 'Entrepreneur & Trainer',
            date: 'Jan 2019 - March 2021',
            location: 'Makkah, Saudi Arabia',
            type: 'In Office',
            projects: [
                'Trainer in Web Design And Development [HTML, CSS, Javascript, Bootstrap, PHP, MySQL] ',
                'Trainer in Office Applications MS Word, MS Excel, MS PowerPoint'
            ]
        },
    ];


    const educations = [
        {
            university: 'Northern University Bangladesh',
            date: 'November 2023- Present',
            subject: 'Bachelor of Computer Science - Web Development',
        },
        {
            university: 'Haji Abul Hossain Institute Of Technology (HABHIT) ',
            date: 'Jun- 2015 – Jul-2019 ',
            subject: 'Diploma In Computer Science - Web Development',
        },

    ];


    const courses = [
        {
            institue: 'Learning & Earning Development Project [LEDP] ',
            date: 'November 2023- Present',
            subject: 'Professional Outsourcing Training In Graphics Design  ',
        },
    ]


    const skills = [
        {
            title: 'Languages & Frameworks',
            topics: ' Bootstrap, Tailwind, WebRTC, PeerJs, JavaScript (ES6+), Nuxt Js, Nuxt UI  '
        },
        {
            title: 'Backend Development (Professional)',
            topics: 'PHP, Laravel, MySQL, RESTful APIs '
        },
        {
            title: 'Backend Development [Extra Activities]',
            topics: 'Node.js, Express, Socket IO '
        },
        {
            title: 'Tools & Platforms',
            topics: 'Git, Babel, ESLint, Visual Studio Code, PHP Strome, Web Strome, JIRA, ClickUp, Postman '
        },
    ]
</script>