'use strict';

/**
 * joke controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::joke.joke');
