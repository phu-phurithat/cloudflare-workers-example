/**
 * Cloudflare Worker — hello-world
 *
 * - Run `npm run dev` to start a local server at http://localhost:8787/
 * - Run `npm run deploy` to publish the worker
 *
 * Docs: https://developers.cloudflare.com/workers/
 */

export default {
	async fetch(request, env, ctx) {
		return new Response("Hello World!");
	},
};
