'use strict';

/**
 * joke service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::joke.joke');
