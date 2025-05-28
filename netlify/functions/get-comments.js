const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);

exports.handler = async function (event) {
  const { post_slug } = event.queryStringParameters;

  const { data, error } = await supabase
    .from('comments')
    .select('*')
    .eq('post_slug', post_slug)
    .order('created_at', { ascending: true });

  if (error) {
    return { statusCode: 500, body: JSON.stringify({ error: error.message }) };
  }

  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };
};
