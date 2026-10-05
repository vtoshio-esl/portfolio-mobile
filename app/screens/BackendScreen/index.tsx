import { SkillsCategoryLayout } from '../../components/SkillsCategoryLayout';

import { SkillCardProps } from '../../components/SkillCard';

export function BackendScreen() {
  const skills: Array<SkillCardProps> = [
    { 'name': 'Python', 'tag': 'language', 'rate': 5 },
    { 'name': 'FastAPI', 'tag': 'framework', 'rate': 4 },
    { 'name': 'Flask', 'tag': 'framework', 'rate': 3 },
    { 'name': 'Django', 'tag': 'framework', 'rate': 3 },
    { 'name': 'Ruby on Rails', 'tag': 'framework', 'rate': 4 },
    { 'name': 'Docker/Docker Compose', 'tag': 'ci/cd', 'rate': 4 },
    { 'name': 'Git', 'tag': 'versioning', 'rate': 5 },
  ]
  
  return (
    <SkillsCategoryLayout
      title="Back-end"
      description="Tecnologias e ferramentas que utilizo para desenvolver APIs, integrações e aplicações escaláveis."
      children={skills}
    />
  );
}
