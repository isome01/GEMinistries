import React from 'react'
import Article from "../../presentational/Article/Article.jsx";

const MinistriesFragment = () => (
    <div>
        <br/>
        <br/>
        <h5 className='text-center'>Ministries for all ages</h5>
        <hr style={{border: 'solid #1e416e 1px'}}/>
        <ul>
            <li>
                <Article
                    width={'100%'}
                    header={'Youth Ministry and Prayer'}
                    summary={`
                        Youth ministry for age groups 4-6, 7-12 and even 13-17 are all welcome.
                        More information coming soon! 
                    `}
                />
                <hr style={{border: 'solid #eee 1px', width: '80%'}}/>
            </li>
            <li>
                <Article
                    width={'100%'}
                    header={`Young Adult Bible Study (Ages 18-25)`}
                    summary={`
                        Bible study is hosted (via our home) around 6:30 PM CST for all young adults;
                        be no stranger as we welcome all to come, no matter who you are or where
                        you come from. 
                        
                        We strive to minister the way the Jesus ministered to flocks of people,
                        and it's a prodigious opportunity to serve the youth, in that we all serve
                        our great and humble King!
                    `}
                />
            </li>
            <li>
                <Article
                    width={'100%'}
                    header={`Adult Ministry`}
                    summary={`
                         - Beneficiaries: Adult ministries will provide services and resources to women
                         and men who are 18 years old or older and live below the federal poverty level.
                         
                         - Location: About one-half of the services and resources provided by Adult minis
                        -try will be provided within the 75212 zip code. The remaining services and resources
                        provided by Senior Ministry will be provided in the Dallas/Fort Worth area.
                        
                         - Fees and Costs: Services and resources of Adult Ministry will be provided free of 
                         any fee, cost or charge to the beneficiaries of those services and resources.

                         - Services and Resources: Services and resources of Adult Ministry will include:
                         spiritual development through courses and activities designed to address spiritual
                         needs, including evangelism, Bible studies, and teaching on moral and ethical 
                         standards and values clarification; courses and activities designed to address needs 
                         for emotional stability through support groups and counseling seminars; social
                         programs that address needs in the areas of communication skills, interpersonal 
                         skills, and positive use of leisure time activities; and vocational training.
                    `}
                />
            </li>
        </ul>
    </div>
);

export default MinistriesFragment
