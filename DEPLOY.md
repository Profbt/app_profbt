# Fluxo de Deploy — Central ProfBT

Este repositório é publicado em ambiente de homologação pelo Coolify.

## Ambiente atual

- Aplicação no Coolify: central-homologacao
- Projeto no Coolify: ProfBT
- Ambiente interno no Coolify: production
- Domínio de homologação: https://teste-central.profbt.com.br
- Repositório: Profbt/app_profbt
- Branch de deploy: main
- Tipo de aplicação: site estático/PWA
- Servidor: nginx via Coolify
- Healthcheck: GET http://localhost:80/
- Código esperado do healthcheck: 200

## Regra principal

Não fazer push direto na branch main.

Toda alteração deve seguir este fluxo:

1. Criar uma branch a partir da main.
2. Fazer as alterações na branch.
3. Criar Pull Request no GitHub.
4. Revisar o Pull Request.
5. Fazer merge na main.
6. Aguardar o auto deploy do Coolify.
7. Validar https://teste-central.profbt.com.br.

## Fluxo com Hermes

O Hermes pode criar branch, alterar arquivos e abrir Pull Request.

O Hermes não deve:

- receber acesso sudo;
- entrar no grupo docker;
- receber credenciais da Oracle Cloud;
- ativar modo /yolo;
- fazer push direto na main;
- alterar produção definitiva sem aprovação.

## Deploy automático

O Coolify está conectado ao GitHub por GitHub App oficial.

Configuração validada:

- Git Source: GitHub App
- Repositório: Profbt/app_profbt
- Branch: main
- Auto Deploy: ativo
- Manual Webhook: não necessário
- Preview Deployments: desativado

Após merge na main, o GitHub App envia o evento para o Coolify e o deploy é iniciado automaticamente.

## Validação após deploy

Validar pelo terminal:

curl -I https://teste-central.profbt.com.br

Resultado esperado:

HTTP/2 200

Também validar arquivos principais:

curl -I https://teste-central.profbt.com.br/app.js
curl -I https://teste-central.profbt.com.br/styles.css
curl -I https://teste-central.profbt.com.br/manifest.json
curl -I https://teste-central.profbt.com.br/sw.js

Resultado esperado para todos:

200

## Domínios

Domínio em uso para homologação:

- teste-central.profbt.com.br

Domínios que não devem ser alterados nesta fase:

- central.profbt.com.br
- profbt.com.br
- profbt.vercel.app

A Vercel deve permanecer ativa temporariamente porque alunos ainda podem ter favoritos antigos salvos.

## Cloudflare

O registro DNS de homologação deve permanecer como:

- Tipo: A
- Nome: teste-central
- Conteúdo: 137.131.161.79
- Proxy: Somente DNS
- TTL: Auto

Não ativar proxy laranja nesta fase.

## Produção definitiva

Ainda não configurar central.profbt.com.br.

A migração para o domínio definitivo só deve acontecer depois de nova validação e decisão explícita.
