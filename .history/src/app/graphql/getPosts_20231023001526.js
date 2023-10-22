// https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/claolx21s4ovr01tadfoba54u/master
// 
//import { HYGRAPH_URL, HYGRAPH_PERMANENTAUTH_TOKEN } from '../lib/constants';

import { useState } from "react";

const HYGRAPH_URL = "https://eu-central-1-shared-euc1-02.cdn.hygraph.com/content/claolx21s4ovr01tadfoba54u/master"
const HYGRAPH_PERMANENTAUTH_TOKEN = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2OTgwMDQyNDEsImF1ZCI6WyJodHRwczovL2FwaS1ldS1jZW50cmFsLTEtc2hhcmVkLWV1YzEtMDIuaHlncmFwaC5jb20vdjIvY2xhb2x4MjFzNG92cjAxdGFkZm9iYTU0dS9tYXN0ZXIiLCJtYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiYjJkN2Q2ZWQtMGVkZC00ODY5LTk3NmUtNjRkMTU5NWI0ZGI0IiwianRpIjoiY2xvMXZ2dHdzZGludzAxdGM5YjlxMzh6YSJ9.fciSL9ravzLsYszhFK0pvevGYIxha3bnGn9lT7xJb6cOzxiQxlEduEeonl-Bv0cPSg1Cv_AebsOmW9Pc4MfMAKs7oUDS-5kBkQp3GVywlGsERwi_1V3fav7nC6Pi0Dn6ViqMNvXwsuymVS1-kTMiDMXSZZDeisnknrWd33ibXda3CJgIdxwsFMpWqSlKfoWwRXcu5lzOVrB3JAONfBnySdXhI42fIV3ac3iOs-J2i5yCojl58Ct5u3o7UVAKblGgOvj6KYDl8WJElRLUtYsoC-9isiurMjtmsOLtb0CHR_0EofGoeAC48vFgyrc3CqjvV89FYDr53MJLhkXzJaMK6R82nrEvs3p8DHGYu4bSnB0PXwg9BtKTuN2TKw1uPYL7ipYi5DDC24IaJoZ1qp9CB595mOwP6srf9J-HOKVXgxojCMw9PI723IVBp5B3E44R5WIdLNC54fGAw-mkItJisUnyCQhVpjHbihoOxUwxYTrn7wFJLZucs7ZGWNt9TQEWiCcAvapWSi3EBhnZgQw6vNJsuF7EdWWb67uS5Su8ic1WACvidu0eQKDQ8OttFjQw1QflbvelCPjioSlrcPCBA5csst2gNJXquyMzoxGyfxtondlyb3GabEVle7N8QMMSYQPxdTH4Um9v4oU_v2_BDRH-dB3Y55_N8eZalrvoCpQ"

export async function GetPosts(skip = 0){
  try {
    const headers = {
      'content-type': 'application/json',
      //'Authorization': `Bearer ${HYGRAPH_PERMANENTAUTH_TOKEN}`
    };
    const requestBody = {
      query: `query Posty {
                posts(skip: ${skip}, first: 5, stage: PUBLISHED) {
                  id
                  title
                  location
                  description
                  photos {
                    id
                    url
                  }
                }
                postsConnection{
                  aggregate{
                    count
                  }
                }
              }
              `,
      variables: { }
    };
    const options = {
      method: 'POST',
      headers,
      body: JSON.stringify(requestBody)
    };
    const response = await (await fetch(HYGRAPH_URL, options)).json();
    console.log('RESPONSE FROM FETCH REQUEST', response?.data);
    return response?.data
  }
  catch (err) {
    console.log('ERROR DURING FETCH REQUEST', err);
  }
};