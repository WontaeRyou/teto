import { questions } from '../questions';

interface CandidateScore {
  name: string;
  score: number;
  percentage: number;
}

export function calcResult(answers: boolean[]): CandidateScore[] {
  const candidateScores: Record<string, number> = {
    "김문수": 0,
    "이준석": 0,
    "이재명": 0,
    "권영국": 0
  };

  // 각 문항에 대한 답변에 따라 후보별 점수 계산
  answers.forEach((answer, index) => {
    const question = questions[index];
    const weights = answer ? question.weight.yes : question.weight.no;
    
    Object.entries(weights).forEach(([candidate, weight]) => {
      candidateScores[candidate] += weight;
    });
  });

  // 최대 점수 계산
  const maxPossibleScore = questions.reduce((max, question) => {
    const maxWeight = Math.max(
      ...Object.values(question.weight.yes),
      ...Object.values(question.weight.no)
    );
    return max + maxWeight;
  }, 0);

  // 결과를 배열로 변환하고 퍼센트 계산
  const results: CandidateScore[] = Object.entries(candidateScores)
    .map(([name, score]) => ({
      name,
      score,
      percentage: Math.round((score / maxPossibleScore) * 100)
    }))
    .sort((a, b) => b.score - a.score);

  return results;
} 