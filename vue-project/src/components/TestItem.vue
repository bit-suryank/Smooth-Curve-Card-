<script setup>
import EdgeIcon from "./icons/IconEdge.vue"
</script>

<template>
        <div class="card">
            <div class="photo">
                <img 
                src="../assets/clem-onojeghuo-zlABb6Gke24-unsplash.jpg"
                />
                <i>
                    <EdgeIcon />
                </i>
            </div>
            <div class="overLeaf">
            </div>

    </div>
</template>

<style scoped>
    .card{
        display: flex;
        flex-direction: column;
        border: 1px solid white;
        width: 250px;
        height: 300px;
        border-radius: 32px;
    }
    .photo{
        width: 100%;
        height: 50%;
        background-color: white;
        border-radius: 32px 32px 0 ;
    }

    .photo img {
        position: relative;
        border-radius: 32px 32px 0 0;
        width: 100%;
        height: 120%;
        right: 0%;
        z-index: 0;
    }

    i{
        position: relative;
        top: -40%;
        z-index: 2;
    }

    
    .overLeaf {
        width: 100%;
        height: 60%;
        border-radius: 0 32px 32px 32px;
        background-color: white;
        z-index: 1;
    }
</style>