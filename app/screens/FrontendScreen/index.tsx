import { SkillsCategoryLayout } from '../../components/SkillsCategoryLayout';

import { SkillCardProps } from '../../components/SkillCard';

export function FrontendScreen() {
  const skills: Array<SkillCardProps> = [
    { 'name': 'JavaScript', 'tag': 'language', 'rate': 3 },
    { 'name': 'TypeScript', 'tag': 'language', 'rate': 2 },
    { 'name': 'HTML5', 'tag': 'markup', 'rate': 5 },
    { 'name': 'CSS3', 'tag': 'markup', 'rate': 4 },
    { 'name': 'Vue.js', 'tag': 'framework', 'rate': 4 },
    { 'name': 'React Native', 'tag': 'framework', 'rate': 3 }
  ]

  return (
    <SkillsCategoryLayout
      title="Front-end"
      description="Tecnologias e ferramentas que utilizo para criar interfaces responsivas e experiências consistentes."
      children={skills}
    />
  );
}
