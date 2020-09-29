<template>
<div class="rating">
    <ul class="list">
        <li @click="rate(star)" v-for="star in maxStars" :class="{ 'active': star <= stars }" :key="star.stars" class="star">
            <i :class="star <= stars ? 'fas fa-star' : 'far fa-star'"></i>
        </li>
    </ul>
    <div v-if="hasCounter" class="info counter">
        <span class="score-rating">{{ stars }}</span>
        <span class="divider">/</span>
        <span class="score-max">{{ maxStars }}</span>
    </div>
</div>
</template>

<script>
export default {
    name: 'Rating',
    props: ['grade', 'maxStars', 'hasCounter'],
    data() {
        return {
            stars: this.grade
        }
    },
    methods: {
        rate(star) {
            if (typeof star === 'number' && star <= this.maxStars && star >= 0) {
                this.stars = this.stars === star ? star - 1 : star
            }
        }
    },
    watch:{
        'stars': function(newVal){
            this.$parent.$parent.star = newVal
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss" scoped>
.rating {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    color: #b7b7b7;

    border-radius: 8px;

    .list {
        padding: 0;
        margin: 0 20px 0 0;

        &:hover {
            .star {
                color: #ffe100;
            }
        }

        .star {
            display: inline-block;
            font-size: 22px;
            transition: all .2s ease-in-out;
            cursor: pointer;

            &:hover {
                ~.star:not(.active) {
                    color: inherit;
                }
            }

            &:first-child {
                margin-left: 0;
            }

            &.active {
                color: #ffe100;
            }
        }
    }

    .info {
        margin-top: 15px;
        font-size: 30px;
        text-align: center;
        display: table;

        .divider {
            margin: 0 5px;
            font-size: 30px;
        }

        .score-max {
            font-size: 20px;
            vertical-align: sub;
        }
    }
}
</style>
