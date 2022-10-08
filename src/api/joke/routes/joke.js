'use strict';

/**
 * joke router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::joke.joke');
