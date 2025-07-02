import rules from '../../data/data.json';

export function GET() {
  return new Response(
    JSON.stringify(rules),
    {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*', // 允许跨域访问
      },
    }
  );
}