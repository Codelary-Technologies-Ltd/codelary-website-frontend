import TeamCard from './TeamCard';
import '../../pages/ourTeam/TeamPage.css';

function TeamList({userss}) {
  return (
    <div className='aboutlistgenpics'>
        {userss.map((userz) =>(
            <TeamCard
            key={userz.id.toString()}
            img={userz.img}
            github={userz.github_link}
            linkd={userz.linkd_link}
            name={userz.name}
            about={userz.about}
            />
        ))}
    </div>
  )
}

export default TeamList;