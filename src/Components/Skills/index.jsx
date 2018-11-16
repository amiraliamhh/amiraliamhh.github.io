import React from 'react';

import Skill from '../Skill';
import mySkills from '../../my-skills.json';

export default class Skills extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="w-100 row">

                    {
                        mySkills.skills.map((skillCat) => (
                            <div className="skill-container p-5 pb-5 w-100 mb-3" >
                                <h5 className="text-dark pb-5">{skillCat['cat-name']}</h5>
                                {
                                    skillCat.data.map((skill) => (
                                        <Skill
                                            skill_name={skill['skill-name']}
                                            percent={skill.percentage}
                                        />
                                    ))
                                }
                            </div>
                        ))
                    }
                </div>
            </div>
        );
    }
}