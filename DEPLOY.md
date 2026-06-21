# Fluxo de Deploy — Central ProfBT

Este repositório é publicado em ambiente de homologação pelo Coolify.

## Ambiente atual

- Aplicação no Coolify: central-homologacao
- Projeto no Coolify: ProfBT
- Ambiente interno no Coolify: production
- Domínio definitivo: https://central.profbt.com.br
- Domínio de conferência/homologação: https://teste-central.profbt.com.br
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
7. Validar https://central.profbt.com.br e https://teste-central.profbt.com.br.

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

curl -I https://central.profbt.com.br
curl -I https://teste-central.profbt.com.br

Resultado esperado:

HTTP/2 200

Também validar arquivos principais no domínio definitivo:

curl -I https://central.profbt.com.br/app.js
curl -I https://central.profbt.com.br/styles.css
curl -I https://central.profbt.com.br/manifest.json
curl -I https://central.profbt.com.br/sw.js

E validar os mesmos arquivos no domínio de conferência/homologação:

curl -I https://teste-central.profbt.com.br/app.js
curl -I https://teste-central.profbt.com.br/styles.css
curl -I https://teste-central.profbt.com.br/manifest.json
curl -I https://teste-central.profbt.com.br/sw.js

Resultado esperado para todos:

200

## Domínios

Domínio definitivo ativo:

- central.profbt.com.br

Domínio de conferência/homologação ativo:

- teste-central.profbt.com.br

Domínios que não devem ser removidos nesta fase:

- central.profbt.com.br
- teste-central.profbt.com.br
- profbt.vercel.app

A Vercel deve permanecer ativa temporariamente porque alunos ainda podem ter favoritos antigos salvos.

## Cloudflare

Os registros DNS da Central devem permanecer como:

- Tipo: A
- Nome: central
- Conteúdo: 137.131.161.79
- Proxy: Somente DNS
- TTL: Auto

- Tipo: A
- Nome: teste-central
- Conteúdo: 137.131.161.79
- Proxy: Somente DNS
- TTL: Auto

Não ativar proxy laranja nesta fase.

## Produção definitiva

O domínio definitivo da Central já está ativo em:

- https://central.profbt.com.br

O domínio teste-central.profbt.com.br deve permanecer ativo como conferência/homologação.

A Vercel deve permanecer ativa temporariamente como legado, até decisão explícita de remoção.
