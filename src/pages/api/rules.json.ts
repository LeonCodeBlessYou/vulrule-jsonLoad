import rules from '../../data/data.json';

export function GET() {
  return new Response(
    JSON.stringify(rules),
    {
      headers: {
        'Content-Type': 'application/json',
        // 允许跨域访问
        'Access-Control-Allow-Origin': '*', 
      },
    }
  );
}