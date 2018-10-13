import React from 'react';

import WE from '../WorkExperience';

export default class WorkExperiences extends React.Component {
    render() {
        return (
            <div className="w-100 mt-5 container mb-5" >
                <WE 
                company="Vira Science"
                compSite="https://www.virascience.com/"
                role="Back-End Developer"
                from="Mar 2017"
                until="Jun 2017"
                techs={[
                    'Python',
                    'Django'
                ]}
                />

                <WE 
                company="Najm Energy"
                compSite="https://www.portal.trade/"
                role="Front-End Developer"
                from="Aug 2017"
                until="Oct 2017"
                techs={[
                    '.NET',
                    'Angular',
                    'Bootstrap'
                ]}
                />

                <WE
                company="Asasbama"
                compSite="http://asasbama.com"
                role="Back-End Developer"
                from="Oct 2017"
                until="Jan 2018"
                techs={[
                    'Nodejs',
                    'MongoDB',
                    'Mongoose',
                    'Angular',
                    'Express'
                ]}
                />

                <WE 
                company="Armangarayan"
                compSite="http://www.designing-application.com/"
                role="Back-End Developer"
                from="Dec 2017"
                until="Jan 2018"
                techs={[
                    'Nodejs',
                    'MySQL',
                    'Sequelize',
                    'Express',
                ]}
                />

                <WE 
                company="Bitooman"
                compSite="http://bitooman.ir"
                role="Full-Stack Developer"
                from="Jan 2018"
                until="Present"
                techs={[
                    'Nodejs',
                    'Typescript',
                    'Express',
                    'Restify',
                    'Redis',
                    'MongoDB',
                    'React',
                    'Angular 5',
                    'Web Sockets',
                    'Jest'
                ]}
                />
            </div>
        );
    }
}