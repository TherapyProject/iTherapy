import React from 'react';
import TeamMember from '../../components/TeamMember/TeamMember';

export const TEAM_MEMBERS = [
  {
    name: 'Nanor Gosdanian',
    title: 'Frontend Developer',
    image: 'https://github.com/NanorG.png',
  },
  {
    name: 'Amal Omar Salah',
    title: 'Frontend Developer',
    image: 'https://github.com/Amal95Salah.png',
  },
  {
    name: 'Ali Ibrahim Jasim',
    title: 'Frontend Developer',
    image: 'https://github.com/bluesky1992-web.png',
  },
  {
    name: 'Hevar Tofiq Hama',
    title: 'Frontend Developer',
    image: 'https://github.com/RageOfKurd.png',
  },
  {
    name: 'Aland Abdullah',
    title: 'Frontend Developer',
    image: 'https://github.com/alandio.png',
  },
];

const Team = () => {
  return (
    <div className="team container min-h-[80vh] mx-auto text-center flex flex-col justify-center items-center my-12 px-8 sm:px-0">
      <h1 className="text-5xl font-bold mb-8">
        We are healing, nice to meet you!
      </h1>
      <p className="text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
        We are a team of passionate developers who are working on this project
        during the Re:Coded Frontend Bootcamp. We are a team of 5 people,
        diverse in our backgrounds, experiences, origins. We are all excited to
        work on this project and to learn new things.
      </p>
      <div className="team-members flex flex-col justify-center">
        <h2 className="text-3xl font-bold my-8">Meet the Team</h2>
        <div className="team-members-list flex flex-row justify-center flex-wrap gap-4">
          {TEAM_MEMBERS.map((member) => (
            <TeamMember
              name={member.name}
              title={member.title}
              image={member.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
